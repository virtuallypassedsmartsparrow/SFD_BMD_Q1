// Global variables
var category = "";
var page = " ";



var values = { // m for model
    M: 0, // Already pulled from smartsparrow. How to I set random inputs?
    L: 0,
    x_1: 0,
    x_2: 0,
    F_1: 0,
    F_2: 0,
    w: 0,
    A_x: 0,
    A_y: 0,
    B_y: 0,
    d_1: 0,
    d_2: 0,
    d_3: 0,
    V_1: 0,
    V_2: 0,
    V_3: 0,
    M_1: 0,
    M_2: 0,
    M_3: 0,
    x_max: 0,
    M_max: 0,
};

var valuesRounded = {
    M: 0, // Already pulled from smartsparrow. How to I set random inputs?
    L: 0,
    x_1: 0,
    x_2: 0,
    F_1: 0,
    F_2: 0,
    w: 0,
    A_x: 0,
    A_y: 0,
    B_y: 0,
    d_1: 0,
    d_2: 0,
    d_3: 0,
    V_1: 0,
    V_2: 0,
    V_3: 0,
    M_1: 0,
    M_2: 0,
    M_3: 0,
    x_max: 0,
    M_max: 0,
};

var names = { //choose how to write variable string.
    M: "M", // Already pulled from smartsparrow. How to I set random inputs?
    L: "L",
    x_1: "x<sub>1</sub>",
    x_2: "x<sub>2</sub>",
    F_1: "F<sub>1</sub>",
    F_2: "F<sub>2</sub>",
    w: "&#969",
    A_x: "A<sub>x</sub>",
    A_y: "A<sub>y</sub>",
    B_y: "B<sub>y</sub>",
    d_1: "d<sub>1</sub>",
    d_2: "d<sub>2</sub>",
    d_3: "d<sub>3</sub>",
    V_1: "V<sub>1</sub>",
    V_2: "V<sub>2</sub>",
    V_3: "V<sub>3</sub>",
    M_1: "M<sub>1</sub>",
    M_2: "M<sub>2</sub>",
    M_3: "M<sub>3</sub>",
    x_max: "x<sub>max</sub>",
    M_max: "M<sub>max</sub>",
};

var units = { //write the units
    M: "kg", // Already pulled from smartsparrow. How to I set random inputs?
    L: "m",
    x_1: "m",
    x_2: "m",
    F_1: "N",
    F_2: "N",
    w: "N/m",
    A_x: "N",
    A_y: "N",
    B_y: "N",
    d_1: "m",
    d_2: "m",
    d_3: "m",
    V_1: "N",
    V_2: "N",
    V_3: "N",
    M_1: "Nm",
    M_2: "Nm",
    M_3: "Nm",
    x_max: "m",
    M_max: "Nm",
};


// Get values from SS
var model = new pipit.CapiAdapter.CapiModel({
    M: 0, 
    L: 0,
    x_1: 0,
    x_2: 0,
    F_1: 0,
    F_2: 0,
    w: 0,
    A_x: 0,
    A_y: 0,
    B_y: 0,
    d_1: 0,
    d_2: 0,
    d_3: 0,
    V_1: 0,
    V_2: 0,
    V_3: 0,
    M_1: 0,
    M_2: 0,
    M_3: 0,
    x_max: 0,
    M_max: 0,
    // m: " ", 
    // L: " ",
    // b: " ",
    // I_G: " ",
    // I_o: " ",
    // O_x_1: " ",
    // O_y_1: " ",
    // O_1: " ",
    // w_1: " ",
    // alpha_1: " ",
    // w_2: " ",
    // alpha_2: " ",
    // V_2: " ",
    // O_x_2: " ",
    // O_y_2: " ",
    // O_2: " ",
    page: "10",
});
// I think this exposes the values to Smart Sparrow. :D

pipit.CapiAdapter.expose('M', model);
pipit.CapiAdapter.expose('L', model);
pipit.CapiAdapter.expose('x_1', model);
pipit.CapiAdapter.expose('x_2', model);
pipit.CapiAdapter.expose('F_1', model);
pipit.CapiAdapter.expose('F_2', model);
pipit.CapiAdapter.expose('w', model);
pipit.CapiAdapter.expose('A_x', model);
pipit.CapiAdapter.expose('A_y', model);
pipit.CapiAdapter.expose('B_y', model);
pipit.CapiAdapter.expose('d_1', model);
pipit.CapiAdapter.expose('d_2', model);
pipit.CapiAdapter.expose('d_3', model);
pipit.CapiAdapter.expose('V_1', model);
pipit.CapiAdapter.expose('V_2', model);
pipit.CapiAdapter.expose('V_3', model);
pipit.CapiAdapter.expose('M_1', model);
pipit.CapiAdapter.expose('M_2', model);
pipit.CapiAdapter.expose('M_3', model);
pipit.CapiAdapter.expose('x_max', model);
pipit.CapiAdapter.expose('M_max', model);
pipit.CapiAdapter.expose('page', model);


//this gets the values from Smart Sparrow. So does that mean I need to put inputs into Smart Sparrow variable tab? Either way, I'm sure these are just the inputs
//I think I can place M R theta_deg in variables. Then make pages # in iniitial state. Then i'm done??!
pipit.Controller.notifyOnReady();

model.on("change:M", function() {
    draw();
});
model.on("change:L", function() {
    draw();
});
model.on("change:x_1", function() {
    draw();
});
model.on("change:x_2", function() {
    draw();
});
model.on("change:F_1", function() {
    draw();
});
model.on("change:F_2", function() {
    draw();
});
model.on("change:d_1", function() {
    draw();
});
model.on("change:d_2", function() {
    draw();
});
model.on("change:d_3", function() {
    draw();
});
model.on("change:page", function() {
     draw();
});

// This is JQuery right? 
$("#selectBox").change(function() {
    draw();
});

//this is the generic function which does all the magic. It gets the values from SS then calculates them then figures out which catagory its in (how does it know what question #? from getvaleusformSS function!!) then displays the values
function draw() {
    getValuesFromSS();
    calculateVariables();

    category = $("#selectBox option:selected").val();
    sendValuesToSS();
    displayValues();
}

//there is no need to send the input values back to smart sparrow. so only send the values that have been calculated.
function sendValuesToSS() {
    model.set("w", values.w);
    model.set("A_x", values.A_x);
    model.set("B_y", values.B_y);
    model.set("A_y", values.A_y);
    model.set("V_1", values.V_1);
    model.set("V_2", values.V_2);
    model.set("V_3", values.V_3);
    model.set("M_1", values.M_1);
    model.set("M_2", values.M_2);
    model.set("M_3", values.M_3);
    model.set("x_max", values.x_max);
    model.set("M_max", values.M_max);

}
// what is the purpose of the num == 4 ? Is this to make it fit to the table somehow?
function displayValues() {
    var show = getShowVariables();
    var s = "<table class=right><tr><td>";
    var num = 1;

    $.each(show, function(i, e) {
        var name = names[e]; // objects can reference members by object.property or by object['property'], allowing you to use variables
        var value = valuesRounded[e];
        var unit = units[e];

        s += name + " = " + value + " " + unit + "<br>";

        if (num == 4) {
            s += "</td><td>";
            num = 0
        }
        num++;

    });

    s += "</td></tr></table>";

    $("#right")[0].innerHTML = s;
}



// Here i'm getting all the inputs from Smart Sparrow. This is the start of the draw function. Only put in inputs because other variables won't be there
function getValuesFromSS() {
    values.M = model.get('M');
    values.L = model.get('L');
    page = model.get('page');
    values.x_1 = model.get('x_1');
    values.x_2 = model.get('x_2');
    values.F_1 = model.get('F_1');
    values.F_2 = model.get('F_2');
    values.d_1 = model.get('d_1');
    values.d_2 = model.get('d_2');
    values.d_3 = model.get('d_3');
}
//ones the inputs are pulled from Smart Sparrow then they're calculated (all part of the draw function). Make sure I start from elementary formulas and work done.
function calculateVariables() {
    values.w = values.M * 9.81 / values.L;
    values.A_x = 0;
    values.B_y = values.F_1*(values.x_1/values.L) + values.F_2*(values.x_2/values.L) + values.M*9.81/2;
    values.A_y = values.M * 9.81 + values.F_1 + values.F_2 - values.B_y;
    values.V_1 = values.A_y - values.w * values.d_1;
    values.V_2 = values.A_y - values.w * values.d_2 - values.F_1;
    values.V_3 = values.w * (values.L - values.d_3) - values.B_y;
    values.M_1 = values.A_y * values.x_1 - 0.5 * values.w * values.x_1 * values.x_1;
    values.M_2 = values.A_y * values.d_2 - values.F_1 * (values.d_2 - values.x_1) - 0.5 * values.w * values.d_2 * values.d_2;
    values.M_3 = values.B_y * (values.L - values.d_3) - 0.5 * values.w * (values.L - values.d_3) * (values.L - values.d_3);
    values.x_max = (values.L - values.B_y / values.w);
    values.M_max = values.B_y * (values.L - (values.L - values.B_y / values.w)) - 0.5 * values.w * (values.L - (values.L - values.B_y / values.w)) * (values.L - (values.L - values.B_y / values.w));

    // Round values into valuesRounded
    $.each(values, function(i, e) {
        valuesRounded[i] = round(values[i]);
    })
}
// case 1 = catagory 1. Is the order determiend by the order in the HTML code?
// page 3 = 30. Page 3 from start of SS tutorial? Start at page 0 or page 1? Why is crank shaft velocity page 1??!
// For case 1, pages 3,4,5,6,7,8 and 9 are all taken care of by the one return line. right?
// what is the max number of variables per category??
// what happens if I have less than 5 categories? How do I specify 3 categories for example?
function getShowVariables() {
    switch (category) {
        case "1": // Category 1
            switch (page) {
                case "10":
                    return ["M", "L"];
                    break;
                case "20": 
                case "30": 
                case "40": 
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                case "100":
                case "110":
                    return ["M", "L", "w", "x_1", "x_2", "F_1", "F_2"];
                    break;
            }
            break;

        case "2": // Category 2
            switch (page) {
                case "10":
                case "20":
                    return [];
                    break;
                case "30":
                    return ["B_y"];
                    break;
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                case "100":
                case "110":
                    return ["B_y", "A_y", "A_x"];
                    break;
            }
            break;

        case "3":
            switch (page) {
                case "10":
                case "20":
                case "30":
                    return [];
                    break;
                case "40":
                    return ["d_1"];
                    break;
                case "50":
                    return ["d_1", "V_1"];
                    break;
                case "60":
                case "70":
                case "80":
                case "90":
                case "100":
                case "110":
                    return ["d_1", "V_1", "M_1"];
                    break;
            }
            break;

        case "4":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                    return [];
                    break;
                case "60":
                    return ["d_2"];
                    break;
                case "70":
                    return ["d_2", "V_2"];
                    break;
                case "80":
                case "90":
                case "100":
                case "110":
                    return ["d_2", "V_2", "M_2"];
                    break;
            }
                break;

        case "5":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                    return [];
                    break;
                case "80":
                    return ["d_3"];
                    break;
                case "90":
                    return ["d_3", "V_3"];
                    break;
                case "100":
                case "110":
                    return ["d_3", "V_3", "M_3"];
                    break;
            }
            break;
    }
    return []; // empty
}
/*
function getShowVariables() {
    switch (category) {
        case "1": // Category 1
            switch (page) {
                case "10": //Crank Shaft Angular Velocity page
                case "20": //Input Power page
                    return ["tMax", "tMin", "tAvg"];
                    break;
                case "30": //Theta_1 and theta_2 page
                case "40": // and so on
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["tMax", "tMin", "tAvg", "P"];
                    break;
            }
            break;
        case "2": // Category 2
            switch (page) {
                case "10":
                    return [];
                    break;
                case "20":
                case "30":
                    return ["w_1_rad"];
                    break;
                case "40":
                    return ["w_1_rad", "theta_1", "theta_2"];
                    break;
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["w_1_rad", "theta_1", "theta_2", "delta_E"];
                    break;
            }
            break;
        case "3":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["d_1", "d_2"];
                    break;
            }
            break;
        case "4":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["w_2_RPM"];
                    break;
            }
            break;
        case "5":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                    return [];
                    break;
                case "50":
                    return ["w_1_RPM", "wMin", "wMax"];
                    break;
                case "60":
                    return ["w_1_RPM", "wMin", "wMax", "C"];
                    break;
                case "70":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "i_reqd"];
                    break;
                case "80":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "rho", "i_reqd", "i_fw"];
                    break;
                case "90":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "rho", "i_reqd", "i_fw", "dI", "dO"];
                    break;
            }
            break;
    }
    return []; // empty
}
*/



// Debugging
// $.each(model.attributes, function(i, e) {
//     console.log(i + " : " + e);
// });


function round(input) {
    // if it is an integer number, return it
    if (parseInt(input) == parseFloat(input)) {
        return input;
    }

    // if the input is NaN or not available or 0, dont round
    if (isNaN(input) == true || input == " " || input == 0) {
        return input;
    }

    if (input > 0) {
        var position = 0;
        var i = input;
        while (i < 1000) { // show 3 sig figs
            i *= 10;
            position++;
        }
        input = Math.round(i) / Math.pow(10, position);
        return input;
    }
    
    return input;
}
