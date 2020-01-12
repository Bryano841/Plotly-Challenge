var sampleID = [];
d3.json("samples.json").then((data) => {
    console.log(data)
    var otuids = data.samples[0].otu_ids;
    var sampleValues = data.samples[0].sample_values;
    var otulabels = data.samples[0].otu_labels;
    var sampValues = data.samples[0].sample_values.slice(0,10).reverse();
    var labels = data.samples[0].otu_labels.slice(0,10);
    var top10 = (data.samples[0].otu_ids.slice(0,10)).reverse();
    var ids = top10.map(otu_id_value => "OTU" + otu_id_value);
    var sampleData = data.samples;
    sampleID = sampleData.map(function(samples){
        return samples.id

    });

    var trace1 = {
        x: sampValues,
        y: ids,
        text: labels,
        type: "bar",
        orientation: "h",

    };
    var data1 = [trace1];
    Plotly.newPlot("bar", data1);

    var trace2 = {
        x: otuids,
        y: sampleValues,
        text: otulabels,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuids
        }

    };
    var data2 = [trace2];
    
    Plotly.newPlot("bubble", data2);

    fillDropDown();
});

function fillDropDown() {
    var dropdownmenu = document.getElementById("selDataset");
    for (i = 0; i < sampleID.length; i++) {
        dropdownmenu.options.add(new Option(sampleID[i]));
    }
}

