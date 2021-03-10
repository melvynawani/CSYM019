let myChart = document.getElementById('myChart').getContext('2d');
    
    //Global Options
    Chart.defaults.global.defaultFontFamily='Times New Roman';
    Chart.defaults.global.defaultFontSize=12;
    Chart.defaults.global.defaultFontColor='black';
    
    let customChart = new Chart(myChart,{

        type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:[
                'Birmingham',
                'Leeds',
                'Sheffield',
                'Cornwall',
                'Manchester'
            ],

            datasets:[{
                label:'Population',
                data: [
                    1141816,
                    793139,
                    584853,
                    569768,
                    552858
                ],
                backgroundColor: [
                    '#ffccd7',
                    'yellow',
                    '#868e96',
                    '#20c997',
                    'violet'
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000',
            }],                   
        },

       options:{
           title:{
               display:true,
               text: 'Largest Cities in United Kingdom',
                fontSize:20
           },
           legend:{
               display:true,
               position:'right',
               labels:{
                   fontColor:'#000'
               }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:50
                }
            },
            tooltips:{
                enabled:true
            }
       }
        
        
    });