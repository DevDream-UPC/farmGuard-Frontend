<template>
  <div class="notifications">
    <h1 class="section-title">Inicio</h1>
    <h1>Notificaciones</h1>
    <div class="graphics-group p-fluid">
      <div class="notification-list">
        <NotificationCard
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
        />
      </div>
      <div class="flex flex-wrap justify-content-center pt-5 gap-4">
        <div class="card flex notification-list pie-chart-container">
          <Chart class="measures-pie" type="pie" :data="chartData" :options="chartOptions" />
        </div>
        <div class="card flex notification-list bar-chart-container">
          <Chart class="measures-bar" type="bar" :data="barChartData" :options="barChartOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart';
import NotificationCard from './NotificationCard.vue';
import axios from 'axios';

export default {
  components: { NotificationCard, Chart },

  data() {
    return {
      notifications: [],
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
    // Fetch notifications
    axios.get('https://my-json-server.typicode.com/Brays83/FarmGuard-Api-Fake/notifications')
        .then(response => {
          this.notifications = response.data;
        })
        .catch(error => console.error(error));

    // Fetch animals and prepare chart data
    axios.get('https://my-json-server.typicode.com/Brays83/FarmGuard-Api-Fake/animals')
        .then(response => {
          const animals = response.data;

          // Count animals by species
          const speciesCount = {};
          animals.forEach(animal => {
            if (speciesCount[animal.species]) {
              speciesCount[animal.species]++;
            } else {
              speciesCount[animal.species] = 1;
            }
          });

          // Prepare data for the pie chart
          this.chartData.labels = Object.keys(speciesCount);
          this.chartData.datasets[0].data = Object.values(speciesCount);

          // Generate colors for each species dynamically
          this.chartData.datasets[0].backgroundColor = this.chartData.labels.map(() => this.getRandomColor());
        })
        .catch(error => console.error(error));

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
.notifications {
  background-color: #76da88;
  padding: 20px; /* Reduced padding for smaller screens */
}

.section-title {
  margin-bottom: 20px; /* Adjusted margins */
  padding-bottom: 10px; /* Adjusted padding */
  border-bottom: 3px solid black;
}

.notification-list {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

/* Custom styles for responsive charts */
.pie-chart-container,
.bar-chart-container {
  width: calc(100% - 1%); /* Full width minus some margin */
}

.pie-chart-container {
  min-height: 300px; /* Minimum height for pie chart */
}

.bar-chart-container {
  min-height: 300px; /* Minimum height for bar chart */
}

.measures-pie, .measures-bar {
  width: calc(100% - 2%);
}

/* Optional custom styles for cards if needed */
.card {
  margin-top: 10px; /* Reduced margin for smaller screens */
}
</style>