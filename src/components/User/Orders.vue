<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<v-list-tile 
						avatar
						v-for="order in orders"
						:key="order.id"
					>
            <v-list-tile-action>
              <v-checkbox
              	color="success"
              	:input-value="order.done"
              	@change="markDone"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tyle-action>
            	<v-btn 
            		class="primary"
            		:to="'/ad/' + order.adId"
            	>Open</v-btn>
            </v-list-tyle-action>
          </v-list-tile>
        </v-list>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				orders: [
					{
						id: '11',
						name: 'Akyl',
						phone: '8-921-121-12-12',
						adId: '123',
						done: false
					}
				]
			}
		},
		methods: {
			markDone (order) {
				order.done = true
			}
		}
	}
</script>