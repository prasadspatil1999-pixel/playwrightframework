function show(name:String  , age?:number)
{
    if(age==undefined)
    {
            console.log("your Name is  ="+ name );

    }
    else
    {
                    console.log("your Name is  ="+ name +  +"Your age is = "+ age);

    }
}
show("prasad")
show("patil",20)