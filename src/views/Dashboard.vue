<template>
  <div class="Dashboard">
    <h1 class="heading text-md-center">Dashboard</h1>
    <v-container class="my-4">
      <v-layout row class="mb-3">
        <v-flex md3>
          <v-tooltip top>
            <v-btn small flat color="grey" slot="activator" @click="sortby('title')">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
            <span>Sort by Project Title</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn small flat color="grey" slot="activator" @click="sortby('person')">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
            <span>Sort by Assigned Person</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <v-card v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3  project ${project.status}`">
          <v-flex xs12 md6>
            <div class="grey--text caption">Project Title</div>
            <div>{{ project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="grey--text caption">Person</div>
            <div>{{ project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="grey--text caption">Due by</div>
            <div>{{ project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip :class="`white--text my-2 caption ${project.status}`">{{ project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortby(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },

  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
