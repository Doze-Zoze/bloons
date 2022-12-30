var bloons = [
    {
        name:["Grouped Red","BTD6Red2.webp",0],
        startRound:1,
        endRound:11,
        cost:20,
        amount:8,
        delay:0.1,
        eco:1.0,
        rbe:1
    },
    {
        name:["Spaced Blue","BTD6Blue.webp",1],
        startRound:1,
        endRound:2,
        cost:15,
        amount:5,
        delay:0.3,
        eco:1.0,
        rbe:2
    },
    {
        name:["Grouped Blue","BTD6Blue2.webp",2],
        startRound:3,
        endRound:12,
        cost:24,
        amount:8,
        delay:0.1,
        eco:1.1,
        rbe:2
    },
    {
        name:["Spaced Green","BTD6Green.webp",3],
        startRound:2,
        endRound:4,
        cost:18,
        amount:5,
        delay:0.23,
        eco:1.2,
        rbe:3
    },
    {
        name:["Grouped Green","BTD6Green2.webp",4],
        startRound:4,
        endRound:16,
        cost:35,
        amount:5,
        delay:0.08,
        eco:1.4,
        rbe:3
    },
    {
        name:["Spaced Yellow","BTD6Yellow.webp",5],
        startRound:3,
        endRound:6,
        cost:24,
        amount:5,
        delay:0.23,
        eco:0.23,
        rbe:4
    },
    {
        name:["Grouped Yellow","BTD6Yellow2.webp",6],
        startRound:7,
        endRound:19,
        cost:40,
        amount:4,
        delay:0.06,
        eco:1.6,
        rbe:4
    },
    {
        name:["Spaced Pink","BTD6Pink.webp",7],
        startRound:4,
        endRound:8,
        cost:28,
        amount:3,
        delay:0.3,
        eco:1.5,
        rbe:5
    },
    {
        name:["Grouped Pink","BTD6Pink2.webp",8],
        startRound:9,
        endRound:50,
        cost:60,
        amount:4,
        delay:0.05,
        eco:2.3,
        rbe:5
    },
    {
        name:["Spaced White","BTD6White.webp",9],
        startRound:5,
        endRound:9,
        cost:30,
        amount:3,
        delay:0.28,
        eco:1.5,
        rbe:11
    },
    {
        name:["Grouped White","BTD6White2.webp",10],
        startRound:10,
        endRound:21,
        cost:65,
        amount:3,
        delay:0.1,
        eco:2.6,
        rbe:11
    },
    {
        name:["Spaced Black","BTD6Black.webp",11],
        startRound:6,
        endRound:9,
        cost:33,
        amount:3,
        delay:0.25,
        eco:1.6,
        rbe:11
    },
    {
        name:["Grouped Black","BTD6Black2.webp",12],
        startRound:10,
        endRound:25,
        cost:75,
        amount:4,
        delay:0.08,
        eco:3,
        rbe:11
    },
    {
        name:["Spaced Purple","BTD6Purple.webp",13],
        startRound:8,
        endRound:10,
        cost:70,
        amount:4,
        delay:0.4,
        eco:3.5,
        rbe:11
    },
    {
        name:["Grouped Purple","BTD6Purple2.webp",14],
        startRound:11,
        endRound:50,
        cost:115,
        amount:5,
        delay:0.035,
        eco:2.9,
        rbe:11
    },
    {
        name:["Spaced Zebra","BTD6Purple.webp",15],
        startRound:9,
        endRound:10,
        cost:60,
        amount:2,
        delay:0.3,
        eco:2.8,
        rbe:23
    },
    {
        name:["Grouped Zebra","BTD6Zebra2.webp",16],
        startRound:11,
        endRound: 29,
        cost: 120,
        amount:3,
        delay:0.08,
        eco:3.5,
        rbe:23
    },
    {
        name:["Spaced Lead","BTD6Lead.webp",17],
        startRound:10,
        endRound:11,
        cost:60,
        amount:2,
        delay:1.0,
        eco:3.0,
        rbe:23
    },
    {
        name:["Grouped Lead","BTD6Lead2.webp",18],
        startRound:12,
        endRound:50,
        cost:160,
        amount:4,
        delay:0.15,
        eco:4.5,
        rbe:23
    },
    {
        name:["Spaced Rainbow","BTD6Rainbow.webp",19],
        startRound:12,
        endRound:12,
        cost:80,
        amount:1,
        delay:0.35,
        eco:3.8,
        rbe:47
    },
    {
        name:["Grouped Rainbow","BTD6Rainbow2.webp",20],
        startRound:13,
        endRound:50,
        cost:250,
        amount:4,
        delay:0.1,
        eco:6.0,
        rbe:47
    },
    {
        name:["Spaced Ceramic","BTD6Ceramic.webp",21],
        startRound:13,
        endRound:15,
        cost:150,
        amount:1,
        delay:0.9,
        eco:4.0,
        rbe:104
    },
    {
        name:["Grouped Ceramic","BTD6Ceramic2.webp",22],
        startRound:16,
        endRound:27,
        cost:400,
        amount:2,
        delay:0.12,
        eco:1.8,
        rbe:104
    },
    {
        name:["Tight Ceramic","BTD6Ceramic3.webp",23],
        startRound:28,
        endRound:50,
        cost:4000,
        amount:40,
        delay:0.02,
        eco:0.0,
        rbe:104
    }
]

var reverseSort = [false,true];
for (var i = 0; i < bloons.length; i++) {
    for (var i2 = 0; i2 < 10; i2++) {
        document.getElementById("table").appendChild(
            Object.assign(
                document.createElement('div'),
                {classList: "cell"}
            )
        ).appendChild(
            Object.assign(
                document.createElement('a'),
                {id: String(i)+"x"+String(i2)}
            )
        );
    }
    document.getElementById(String(i)+"x0").parentElement.appendChild(
        Object.assign(
            document.createElement('div'),
            {classList:"imgContainer"}
        ).appendChild(
            Object.assign(
                document.createElement('img'),
            {classList:"img",
            id: String(i)+"img"}
            )
        )
    )
    bloons[i].EPS = Math.round((bloons[i].eco / (bloons[i].delay * bloons[i].amount))*100)/100
    bloons[i].sustainable = Math.round((6 / (bloons[i].delay * bloons[i].amount) * bloons[i].cost)*100)/100
    if (bloons[i].eco > 0) {
        console.log(bloons[i].cost)
        bloons[i].efficiency = Math.round((bloons[i].cost / bloons[i].eco * 6)*100)/100
    } else { bloons[i].efficiency = "N/A"}
    }

document.getElementById("Bloons").addEventListener("click", function(){sort("id")});
document.getElementById("Rounds").addEventListener("click", function(){sort("startRound")});
document.getElementById("Cost").addEventListener("click", function(){sort("cost")});
document.getElementById("Amount").addEventListener("click", function(){sort("amount")});
document.getElementById("Delay").addEventListener("click", function(){sort("delay")});
document.getElementById("Eco").addEventListener("click", function(){sort("eco")});
document.getElementById("RBE").addEventListener("click", function(){sort("rbe")});
document.getElementById("EPS").addEventListener("click", function(){sort("EPS")});
document.getElementById("Sustainable").addEventListener("click", function(){sort("sustainable")});
document.getElementById("Efficiency").addEventListener("click", function(){sort("efficiency")});
document.getElementById("ReverseSort").addEventListener("click", reverseSortDir);

function reverseSortDir() {
    reverseSort.reverse()
    bloons.reverse()
    print()
}
function sort(key="id") {
    if (key == "id") {
        bloons = bloons.sort(function(a ,b) {
            var keyA = a["name"][2],
            keyB = b["name"][2];
            return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0))
        })
    } else {
        bloons = bloons.sort(function(a ,b) {
            var keyA = a[key],
            keyB = b[key];
            return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0))
        })
    }
    
    if (reverseSort[0] == true) {bloons.reverse()};
    print();
}
function print() {
    for (var i = 0; i < bloons.length; i++) {
        var send = Object.entries(bloons[i])
        document.getElementById(String(i)+"x0").innerHTML = String(send[0][1][0]);
        document.getElementById(String(i)+"x0").classList = "name";
        document.getElementById(String(i)+"x0").parentElement.classList = "nameCell cell";

        document.getElementById(String(i)+"img").src = "img/"+String(send[0][1][1]);
        document.getElementById(String(i)+"x1").innerHTML = (String(send[1][1]) + " - " + String(send[2][1]))
        for (var i2 = 3; i2 < 11; i2++) {
            document.getElementById(String(i)+"x"+String(i2-1)).innerHTML = String(send[i2][1])
        }
}
}

print()