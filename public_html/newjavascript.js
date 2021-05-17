$(function () {
    $("article").append(termekekJASON+"<br>");
    var szovegbolObjektum=JSON.parse(termekekJASON);
    console.log(szovegbolObjektum);
    var termekekJASON='[{"ID": "0001","tNev": "Kapa","tÁr": "1000Ft","tSzin": "Fekete"},{"ID": "0002","tNev": "Lapát","tÁr": "2000Ft","tSzin": "Piros"},{"ID": "0003","tNev": "Seorű","tÁr": "500Ft","tSzin": "Barna"}]';
    
    $("article").append("table");
    $("article table").append("<tr><th>ID</th><th>Termék név</th><th>Termék ár</th><th>Termék szin</th></tr>");
    });
    for (var i = 0; i < termekekJASON.lenght; i++) {
        $("article table").append("<tr>");
        for (var item in termekekJASON[i]) {
        $("article table tr").eq(i + 1).append("<td>"+ termekekJASON[i][item]+ "</td>");
    }
    
}
    

    var termekek = {
        ID: "111",
        tNev: "Ásó",
        tÁr: "10Ft",
        tSzin: "Zöld"
    };

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    