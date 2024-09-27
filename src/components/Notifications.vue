<template>
  <div class="notifications">
    <h1 class="section-title">Inicio</h1>
    <h1>Notificaciones</h1>
    <div class="graphics-group">
      <div class="notification-list">
        <NotificationCard
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
        />
      </div>
      <div class="charts-container">
        <div class="card flex justify-center pie-chart">
          <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
        </div>
        <div class="card flex justify-center mt-4 bar-chart">
          <Chart type="bar" :data="barChartData" :options="barChartOptions" class="w-full md:w-[30rem]" />
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
      value: 60,
      notifications: [],
      chartData: {
        labels: ['Ovinos', 'Caballos', 'Vacas'], // Cambia esto según tus datos
        datasets: [
          {
            data: [300, 50, 100], // Cambia esto según tus datos
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
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
      barChartData: {
        labels: ['Mastitis', 'Brucelosis', 'Fiebre Aftosa'], // Cambia esto según tus datos
        datasets: [
          {
            label: 'Enero',
            data: [25, 15, 10], // Datos de frecuencia para cada enfermedad en el primer mes
            backgroundColor: '#FF6384',
          },
          {
            label: 'Febrero',
            data: [30, 20, 15], // Datos de frecuencia para cada enfermedad en el segundo mes
            backgroundColor: '#36A2EB',
          },
          {
            label: 'Marzo',
            data: [20, 25, 5], // Datos de frecuencia para cada enfermedad en el tercer mes
            backgroundColor: '#FFCE56',
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
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
            stacked: true // Habilitar apilamiento en el eje X
          }],
          yAxes: [{
            stacked: true // Habilitar apilamiento en el eje Y
          }]
        }
      },
    };
  },

  created() {
    axios.get('http://localhost:3000/notifications')
        .then(response => {
          this.notifications = response.data;
        })
        .catch(error => console.error(error));

    axios.get('http://localhost:3000/animals')
        .then(response => {
          this.animalCount = response.data.length; // Contar los animales
          this.totalAnimals = response.data.length; // Total de animales (puedes ajustar según tu lógica)
        })
        .catch(error => console.error(error));
  },
};
</script>

<style scoped>

.graphics-group {
  display: flex; /* Usar flexbox para organizar la disposición */
  gap: 2rem;
}

.notification-list{
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

.section-title {
  margin: 0 50px 50px 50px;
  padding: 20px 0 10px 0;
  border-bottom: 3px solid black;
}

h1 {
  margin-top: 0;
}

.charts-container {
  flex-basis: 80%;
  display: flex;
  gap: 2rem;

}

.notifications {
  background-color: #77db89;
  padding: 50px;
}

.pie-chart,
.bar-chart {
  width: 60%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

.card {
  margin-top: 20px; /* Espaciado entre gráficos */
}
</style>