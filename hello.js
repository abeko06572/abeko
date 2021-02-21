const data = [
    {
        name: "A",
        height: 160,
        weight: 55
    },
    {
        name: "B",
        height: 170,
        weight: 60
    },
    {
        name: "C",
        height: 150,
        weight: 50
    }
];

function main()
{
    let i,j,x;

    console.log(data);

    for(i=0;i<data.length;i++)
    {
        for(j=i+1;j<data.length;j++)
        {
            if(data[i].height > data[j].height)
            {
                x = data[i];
                data[i] = data[j];
                data[j] = x;
            }
        }
    }
    console.log(data);
}

main();