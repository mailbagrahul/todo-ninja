<template>
  <div class="projects">
    <v-container class="my-4">
      <h1 align-center>My Projects</h1>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myprojects" :key="project.title">
          <div slot="header">{{ project.title}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due}}</div>
              <div>{{ project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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

  computed: {
    myprojects() {
      return this.projects.filter(project => {
        return project.person === "Jon Snow";
      });
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
