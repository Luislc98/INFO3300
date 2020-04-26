


const svg7 = d3.select("#map");
const width7 = svg7.attr("width");
const height7 = svg7.attr("height");
const map = svg7.append("g");


const requestData = async () => {


    const world=  await d3.json("europe.topojson" );
    var countries = topojson.feature(world, world.objects.europe);
    var projection = d3.geoMercator()
    .fitSize([width7,height7],countries);
    var path = d3.geoPath().projection(projection);  
    
    
    
    
    
    let maxscore = d3.max(countries.features, function(d) {return d.properties.pisa; });
    let minscore = d3.min(countries.features, function(d) {return d.properties.pisa; });
  
    var myScale = d3.scaleSequential(d3.interpolateViridis)
    .domain([minscore,maxscore]);
    
 


    map.selectAll("path").data(countries.features)
        .enter()
        .append("path")
        .attr("class","country")
        .attr("d", path)
        .style("fill", d => myScale( (d.properties.pisa) ));
        
    d3.selectAll(".country")
        .on("mouseover", mouseOnMap);
     

     d3.selectAll(".country")
        .on("mouseout", mouseOffCountry);
        

        function mouseOnMap() {
            
            let state = d3.select(this);
      
            console.log(state);
            d3.select(this)
              
              .style("stroke","black")
              .style("stroke-width","2px");
              d3.select("#hint")
              .text("d");
      
            
          }
          function mouseOffCountry() {
            
            d3.select(this)
              
              .style("stroke-width","0px");
      
            
          }



  };
    requestData();