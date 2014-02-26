/**
 * Fonction JQuery pour l'application Calendar
 */

/**
 * Fonction principale de création de la grille.
 * http://jsperf.com/jquery-vs-createelement
 */
function createGridTable(cols, rows) {
    
    var pGrid = gridNative;
    var gridHours = Object.keys(pGrid);
    var gridDays = Object.keys(pGrid[gridHours[0]]);
    
    /*var scope = angular.element(document.getElementById("calendarDiv")).scope();
    alert(scope.grid);
    scope.$apply(function() {
        alert('ICI');
    });*/
    
    var table = document.createElement("table");
    table.className = "table table-bordered c-screen-table";
    
    // Création du header
    var thead = document.createElement("thead");
    table.appendChild(thead);
    
    var row = document.createElement("tr");
    thead.appendChild(row);
    
    // Colonne des périodes
    var th1 = document.createElement("th");
    th1.className = "c-col-period";
    row.appendChild(th1);
    // Itération sur les colonnes de jour
    for (var colIndex in gridDays) {
        var dayKey = gridDays[colIndex];
        var th = document.createElement("th");
        th.className = "c-col-day";
        var texthead = document.createTextNode(dayKey);
        th.appendChild(texthead);
        row.appendChild(th);
    }
    
    // Création du body
    var tbody = document.createElement("tbody");
    
    for (var rowIndex in gridHours) {
        var hour = gridHours[rowIndex];
        var rowData = pGrid[hour]
        row = document.createElement("tr");
        tbody.appendChild(row);
        
        // Première colonne de période
        var td1 = document.createElement("td");
        td1.className = "c-col-period";
        td1.appendChild(document.createTextNode(hour));
        row.appendChild(td1);
        
        for (var colIndex in gridDays) {
            var day = gridDays[colIndex];
            var screenData = rowData[day][0];
            screenData.hour = hour;
            screenData.day = day;
            var td = document.createElement("td");
            td.className = "c-col-period";
            
            var spots = createGridCellContent(screenData);
//            var texthead = document.createTextNode("TD " + r + "-" + c);
//            td.appendChild(texthead);
            td.appendChild(spots);
            row.appendChild(td);
        }
    }
    table.appendChild(tbody);
    
    $("#placeholder").append(table);
}
/**
 * Fonction secondaire de création du contenu d'une cellule de grille.
 * @param screenData Les données de l'écran (qui contient les spots)
 */
function createGridCellContent(screen) {
    var result = document.createElement("div");
    result.className = "c-screen";
    // header
    var headerDiv = document.createElement("div");
    headerDiv.className = "c-screen-header";
    headerDiv.appendChild(document.createTextNode(screen.title));
    result.appendChild(headerDiv);
    
    // Liste des spots
    var spots = document.createElement("div");
    spots.className = "c-screen-spots droppable";
    spots.setAttribute("droppable", "");
    result.appendChild(spots);
    
    var spotsList = screen.spots;
    // liste des spots
    for (var spotIndex in spotsList) {
        var oneSpot = spotsList[spotIndex];
        var spot = document.createElement("div");
        spot.className = "c-spot ui-draggable jqueryHideMe";
        var spotId = screen.hour + "_" + screen.day + "_" + spotIndex;
        spot.setAttribute("id", spotId);
        spot.setAttribute("draggable", "true");
        spot.setAttribute("unselectable", "on");
        spots.appendChild(spot);
        
        var spotDuration = document.createElement("span");
        spotDuration.className = "fc-event-time";
        spot.appendChild(spotDuration);
        spotDuration.appendChild(document.createTextNode(oneSpot.duration + " "));
                         
        var spotTitle = document.createElement("span");
        spotTitle.className = "fc-event-title";
        spot.appendChild(spotTitle);
        spotTitle.appendChild(document.createTextNode(oneSpot.title));
    }
    return result;
}

function MakeTablejQuery(rows, cols) {
    var table = $("<table/>").attr("border", 1);
    for (r = 0; r < rows; r++) {
        var row = $("<tr/>");
        for (var c = 0; c < cols; c++) {
            if (r == 0) {
                row.append($("<th/>").text("Column " + c))
            } else {
                row.append($("<td/>").text(c.toString() + r.toString()))
            }
        }
        table.append(row);
    }
    $("#placeholder").append(table);
}

function MakeTablejQueryNative(rows, cols) {
    var table = document.createElement("table");
    var placeholder = $('#placeholder');

    $('table').attr("border", 1);
    for (r = 0; r <= rows; r++) {
        var row = document.createElement("tr");
        for (var c = 0; c < cols; c++) {
            if (r == 0) {
                var head = document.createElement("th");
                var texthead = document.createTextNode("Column " + c);

                head.appendChild(texthead);
                row.appendChild(head);
            }
            else {
                var col = document.createElement("td");
                var textrow = document.createTextNode(c.toString() + r.toString());

                col.appendChild(textrow);
                row.appendChild(col);
            }
        }
        table.appendChild(row);
    }            
    $('#placeholder').append(table);
}


function createGridTableNative() {
    var table = document.createElement('table');
    table.width  = 625;
    table.className="feltoltesek_tabla_szegely";
    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.width = 20; 
    td1.align="center";
    td1.height = 32;
    td1.rowSpan=3;
    var chb = document.createElement('input');
    chb.type="checkbox";
    var td2 = document.createElement('td');
    td2.rowSpan = 3;
    td2.width = 20; 
    td2.align="center";
    var kuka = document.createElement('div');
    kuka.className = "spr_kuka";
    var td3 = document.createElement('td');
    td3.rowSpan = 3;
    td3.width =  20; 
    td3.align="center";
    var dupl = document.createElement('div');
    dupl.className = "spr_dupl";
    var td4 = document.createElement('td');
    td4.rowSpan = 3;
    td4.width = 135;
    td4.align = "center";
    $('<img/>').attr('src',"http://jsfiddle.net/img/logo.png")
        .css({display:'none',width:76})
        .appendTo(td4)
        .load(function(){
        $(this).fadeIn(1000); });
    var td5 = document.createElement('td');
    td5.innerHTML = "file.name";
    var td6 = document.createElement('td');
    td6.width = 100;
    var meret= document.createElement('select');
    meret.className = "sel_sm";
    var td7 = document.createElement('td');
    td7.width = 80;
    var db = document.createElement('input');
    db.className = "box_sm";
    db.size=3;
    db.type="text";
    var db_span = document.createElement('span');
    db_span.innerHTML = "&nbsp;*";
    var tr2 = document.createElement('tr');
    tr2.height = 21;
    var tdu1 = document.createElement('td');
    var tdu2 = document.createElement('td');
    var tdu3 = document.createElement('td');
    var tdu4 = document.createElement('td');
    var tdu5 = document.createElement('td');
    var tdu6 = document.createElement('td');
    var tdu7 = document.createElement('td');
    var tdu8 = document.createElement('td');            
    var keparany = document.createElement('td');
    keparany.colSpan=3;
    keparany.innerHTML = "row2";
    var felbontas = document.createElement('td');
    felbontas.colSpan=3;
    felbontas.innerHTML = "row3";
    var tr3 = document.createElement('tr');
    tr3.height = 21;
    td1.appendChild(chb);
    td2.appendChild(kuka);
    td3.appendChild(dupl);
    td6.appendChild(meret);
    td7.appendChild(db);        
    td7.appendChild(db_span);    
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    tr1.appendChild(td6);
    tr1.appendChild(td7);
    tr2.appendChild(keparany);
    tr3.appendChild(felbontas);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    var e2 = document.getElementById('id');
    e2.appendChild(table);
}