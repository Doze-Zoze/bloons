var bloons = [
    {
        name:"Grouped Red",
        startRound:1,
        endRound:11,
        cost:20,
        amount:8,
        delay:0.1,
        eco:1.0,
        rbe:1
    },
    {
        name:"Spaced Blue",
        startRound:1,
        endRound:2,
        cost:15,
        amount:5,
        delay:0.3,
        eco:1.0,
        rbe:1
    },
    {
        name:"Grouped Blue",
        startRound:3,
        endRound:12,
        cost:24,
        amount:8,
        delay:0.1,
        eco:1.1,
        rbe:2
    },
    {
        name:"Spaced Green",
        startRound:2,
        endRound:4,
        cost:18,
        amount:5,
        delay:0.23,
        eco:1.2,
        rbe:3
    },
    {
        name:"Grouped Green",
        startRound:4,
        endRound:16,
        cost:35,
        amount:5,
        delay:0.08,
        eco:1.4,
        rbe:3
    },
    {
        name:"Spaced Yellow",
        startRound:3,
        endRound:6,
        cost:24,
        amount:5,
        delay:0.06,
        eco:0.23,
        rbe:4
    },
    {
        name:"Grouped Yellow",
        startRound:7,
        endRound:19,
        cost:40,
        amount:4,
        delay:0.06,
        eco:1.6,
        rbe:4
    },
    {
        name:"Spaced Pink",
        startRound:4,
        endRound:8,
        cost:28,
        amount:3,
        delay:0.3,
        eco:1.5,
        rbe:5
    },
    {
        name:"Grouped Pink",
        startRound:9,
        endRound:50,
        cost:60,
        amount:4,
        delay:0.05,
        eco:2.3,
        rbe:5
    },
    {
        name:"Spaced White",
        startRound:5,
        endRound:9,
        cost:30,
        amount:3,
        delay:0.28,
        eco:1.5,
        rbe:11
    },
    {
        name:"Grouped White",
        startRound:10,
        endRound:21,
        cost:65,
        amount:3,
        delay:0.1,
        eco:2.6,
        rbe:11
    },
    {
        name:"Spaced Black",
        startRound:6,
        endRound:9,
        cost:33,
        amount:3,
        delay:0.25,
        eco:1.6,
        rbe:11
    },
    {
        name:"Grouped Black",
        startRound:10,
        endRound:25,
        cost:75,
        amount:4,
        delay:0.08,
        eco:3,
        rbe:11
    },
    {
        name:"Spaced Purple",
        startRound:8,
        endRound:10,
        cost:70,
        amount:4,
        delay:0.4,
        eco:3.5,
        rbe:11
    },
    {
        name:"Grouped Purple",
        startRound:11,
        endRound:50,
        cost:115,
        amount:5,
        delay:0.035,
        eco:2.9,
        rbe:11
    },
    {
        name:"Spaced Zebra",
        startRound:9,
        endRound:10,
        cost:60,
        amount:2,
        delay:0.3,
        eco:2.8,
        rbe:23
    },
    {
        name:"Grouped Zebra",
        startRound:11,
        endRound: 29,
        cost: 120,
        amount:3,
        delay:0.08,
        eco:3.5,
        rbe:23
    },
    {
        name:"Spaced Lead",
        startRound:10,
        endRound:11,
        cost:60,
        amount:2,
        delay:1.0,
        eco:3.0,
        rbe:23
    },
    {
        name:"Grouped Lead",
        startRound:12,
        endRound:50,
        cost:160,
        amount:4,
        delay:0.15,
        eco:4.5,
        rbe:23
    },
    {
        name:"Spaced Rainbow",
        startRound:12,
        endRound:12,
        cost:80,
        amount:1,
        delay:0.35,
        eco:3.8,
        rbe:47
    },
    {
        name:"Grouped Rainbow",
        startRound:13,
        endRound:50,
        cost:250,
        amount:4,
        delay:0.1,
        eco:6.0,
        rbe:47
    },
    {
        name:"Spaced Ceramic",
        startRound:13,
        endRound:15,
        cost:150,
        amount:1,
        delay:0.9,
        eco:4.0,
        rbe:104
    },
    {
        name:"Grouped Ceramic",
        startRound:16,
        endRound:27,
        cost:400,
        amount:2,
        delay:0.12,
        eco:1.8,
        rbe:104
    },
    {
        name:"Tight Ceramic",
        startRound:28,
        endRound:50,
        cost:4000,
        amount:40,
        delay:0.02,
        eco:0.0,
        rbe:104
    }
]
for (var i = 0; i < bloons.length; i++) {
    for (var i2 = 0; i2 < 9; i2++) {
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
    bloons[i].EPS = bloons[i].eco / (bloons[i].delay * bloons[i].amount)
    if (bloons[i].eco > 0) {
        console.log(bloons[i].cost)
        bloons[i].efficiency = bloons[i].cost / bloons[i].eco * 6
    }
    bloons[i].sustainable = 6 / (bloons[i].delay * bloons[i].amount) * bloons[i].cost
    }

bloons.sort(function(a ,b) {
    var keyA = a.sustainable,
    keyB = b.sustainable;
    return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0))
})

for (var i = 0; i < bloons.length; i++) {
    var send = Object.entries(bloons[i])
    document.getElementById(String(i)+"x0").innerHTML = String(send[0][1])
    document.getElementById(String(i)+"x1").innerHTML = (String(send[1][1]) + " - " + String(send[2][1]))
    for (var i2 = 3; i2 < 10; i2++) {
        document.getElementById(String(i)+"x"+String(i2-1)).innerHTML = String(send[i2][1])
    }
}