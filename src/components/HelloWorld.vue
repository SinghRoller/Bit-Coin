<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
				src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png"
				class="my-3"
				contain
				height="100"
				/>
			</v-col>
			<v-col class="mb-4">
				<h1 class="display-2 font-weight-bold mb-3">
				Welcome to Bitcoin App   
				</h1>
				<div>
					<h3>Rate : <span class="primary--text"> {{selectedRate}}</span></h3>
				</div>
			<!-- <div v-for="objectKeyName in objectKeys" :key="objectKeyName" @click="handleClick(objectKeyName)">
			
			</div> -->
				<v-select name="" id="" v-model="selected"
					:items="objectKeys"
					label="Select a category"
				>
						<!-- <option v-for="objectKeyName in objectKeys" :key="objectKeyName" > {{objectKeyName}}</option> -->
				</v-select>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: "HelloWorld",
		data: () => ( {
		info: {},
		selected: {},
		selectedRate: '',
	}),
	created() {
		this.fetchAPIData();
	},
   methods: {
   fetchAPIData( ) { 
		fetch("https://apiv2.bitcoinaverage.com/constants/exchangerates/global", {
			"method": "GET",
			"headers": {
			"x-ba-key": "NGY1MDI3NDhiNThkNDU2Nzk3ZDJkOGY4Zjk3NTNmODE"
			}
		})
		.then(response => response.json())
		.then(response => {
			this.info = response;
		})
		.catch(err => {
			console.log(err);
		});
    },
  	handleClick(objectKeyName) {
    	this.selected = this.info.rates[objectKeyName];
    },
  },
  watch: {
  	selected(newVal) {
    	this.selectedRate = this.info.rates[newVal].rate;
    }
  },
  computed: {
  selectedID: function () {
      return this.selected.id;
    },
  	objectKeys() {
    	if (this.info.rates !== undefined) {
    		return Object.keys(this.info.rates);      
      }
      return [];
    }
  }
}
</script>
