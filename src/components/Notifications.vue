<template>
  <div class="p-5" style="background-color: #4ADE80; ">
    <div >
      <h1 class="font-bold text-black-alpha-90 m-0  xl:text-6xl lg:text-6xl  md:text-6xl  sm:text-3xl ">Inicio</h1>
      <hr>
    </div>

    <div class="grid">
      <div class="col-12 md:col-6 lg:col-6">
        <div class="home-card p-4">
          <Chart  type="pie" :data="chartData" :options="chartOptions" width="100%" height="400" />
        </div>

      </div>

      <div class=" col-12 md:col-6 lg:col-6 ">
        <div class="home-card p-4">
          <Chart type="bar" :data="barChartData" :options="barChartOptions" width="100%" height="400" />
        </div>
      </div>

      <div class="home-card col-12 ">
        <div class="flex justify-content-center p-2">
          <h1 class="font-bold text-black-alpha-90 m-0  xl:text-2xl lg:text-2xl  md:text-2xl  sm:text-1xl ">Animales Registrados</h1>
        </div>
        <pv-progress-bar :value="numberAnimal"></pv-progress-bar>
        <div class="flex justify-content-center">
          <p style="color: black">{{numberAnimal}}</p>
        </div>

      </div>





    </div>


  </div>

</template>

<script>
import Chart from 'primevue/chart';
import NotificationCard from '../notifications/components/NotificationCard.vue';
import axios from 'axios';
import AnimalsList from "../animals/components/animals-list.component.vue";
import {AnimalApiService} from "../animals/services/animal-api.service.js";


export default {
  components: { NotificationCard, Chart },

  data() {
    return {
      notifications: [],
      animalService: new AnimalApiService(),
      numberAnimal: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          }
        ]
      },
      // Initialize barChartData as an empty object
      barChartData: {
        labels: [], // Months will be added here
        datasets: [] // Frequency data will be added here
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Distribución de Animales'
          }
        }
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Frecuencia de Enfermedades'
          }
        },
        scales: {
          xAxes: [{
            stacked: false
          }],
          yAxes: [{
            stacked: true
          }]
        }
      },
    };
  },

  created() {
    let user = JSON.parse(localStorage.getItem(`user`));
    // Fetch notifications
    axios.get('https://my-json-server.typicode.com/Brays83/FarmGuard-Api-Fake/notifications')
        .then(response => {
          this.notifications = response.data;
        })
        .catch(error => console.error(error));

    // Fetch animals and prepare chart data
    this.animalService.getAll(user.inventoryId).then(response => {
      const animals = response.data;
      this.numberAnimal = animals.length;
      const speciesCount = {};
      animals.forEach(animal => {
        if (speciesCount[animal.specie]) {
          speciesCount[animal.specie]++;
        } else {
          speciesCount[animal.specie] = 1;
        }
      });

      // Prepare data for the pie chart
      this.chartData.labels = Object.keys(speciesCount);
      this.chartData.datasets[0].data = Object.values(speciesCount);

      // Generate colors for each species dynamically
      this.chartData.datasets[0].backgroundColor = this.chartData.labels.map(() => this.getRandomColor());
    })

    // Fetch diseases and prepare bar chart data
    axios.get('https://my-json-server.typicode.com/Brays83/FarmGuard-Api-Fake/diseases')
        .then(response => {
          const diseases = response.data;

          // Prepare labels and datasets for the bar chart
          this.barChartData.labels = Object.keys(diseases[0].frequency_by_month); // Get months from the first disease

          // Create datasets for each disease
          this.barChartData.datasets = diseases.map(disease => ({
            label: disease.name,
            data: Object.values(disease.frequency_by_month), // Get frequency values for each month
            backgroundColor: this.getRandomColor(),
          }));
        })
        .catch(error => console.error(error));
  },

  methods: {
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

<style scoped>

.home-card {
  background-color: #ffffff;

  border-radius: 10px;
}

hr {
  border: 2px solid black;
}
</style>