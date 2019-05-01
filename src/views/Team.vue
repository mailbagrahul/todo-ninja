<template>
  <div class="team">
    <v-container class="my-4">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text caption">{{ person.role}}</div>
            </v-card-text>
            <v-card-action>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Jon Snow", role: "Web developer", avatar: "/avatar-1.png" },
        { name: "Tyrion", role: "Graphic designer", avatar: "/avatar-2.png" },
        { name: "Dany", role: "Web developer", avatar: "/avatar-3.png" },
        {
          name: "Ned Stark",
          role: "Social media maverick",
          avatar: "/avatar-4.png"
        },
        { name: "Cersei", role: "Sales guru", avatar: "/avatar-5.png" }
      ]
    };
  }
};
</script>
 