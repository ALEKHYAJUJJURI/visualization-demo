import { CategoryScale } from 'chart.js';
import { Chart } from 'chart.js/auto';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import './App.css';
Chart.register(CategoryScale)
function App() {
  return (
   <div>
   <div className='card'>
   <Bar
    data = {{
      labels : ['A','B','C','D'],
      datasets : [
        {
          label : 'Count',
          data : [200,300,400,600],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)'
          ]
        },
        {
          label : 'Loss',
          data : [500,300,200,100],
          backgroundColor: [
            'rgba(22, 23, 162, 0.8)', 
          ]
        },
        {
          label : 'profit',
          data : [100,200,300,400],
          backgroundColor: [
            'rgba(192, 13, 222, 0.8)', 
          ]
        }

      ]
    }}
    />
   </div>
   <div className='card'>
    <Doughnut
    data={{
      labels : ['Ali','Sailu','Ramya'],
      datasets : [
        {
          label : 'Friends',
          data : [90,90,83],
          backgroundColor : [
            'rgba(255,67,120,0.9)',
            'rgba(92,234,56,0.5)',
            'rgba(188,29,25,0.6)'
          ],
          borderRadius :3,
        },
        
      ],
     
    }}
    />
   </div>
   </div>
  );
}

export default App;
