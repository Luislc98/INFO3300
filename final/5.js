



d3.csv("diamond_counts.csv" ).then(function(data) {

    
    data.forEach( d => {
        d['carat'] = Number(d['carat']);
        d['count'] = Number(d['count']);
        
      });

let svg = d3.select("#area");

let maxCarat = d3.max(data, function(d) {return d["carat"]; });
let maxCount = d3.max(data, function(d) {return d["count"]; });
let xScale = d3.scaleLinear()
    .domain([0, maxCarat])
    .range([0, 490]);
let yScale = d3.scaleLinear()
    .domain([0, maxCount])
    .range([100, 0]);

let bottomAxis = d3.axisBottom(xScale).tickFormat(d3.format("~f"));


    svg.append("g")
    .attr("class", "axis")
    .attr("transform","translate("+(0)+","+(100)+")")
    .call(bottomAxis);

    svg.append("g")
    .attr("class", "chart");
    let a =100;
    var area = d3.area()
    .x(function(d) { return xScale(d["carat"]); })
    .y0(a)
    .y1(function(d) { return yScale(d["count"]); });
    
    svg.append("path")
    .datum(data)
    .attr("class", "chart")
    .attr("d", area)
    .style("fill","blue")
    .style("stroke-width","2px")
    .style("stroke","darkblue");


});

