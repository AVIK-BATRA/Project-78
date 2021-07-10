var images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUVXoE5RyyOIRdnX4YdYgZxP-3L3KduU30g&usqp=CAU","https://img1.pnghut.com/22/6/15/u60rvNupvT/cartoon-action-figure-boss-baby-tshirt-animation.jpg","https://thumbs.dreamstime.com/b/teenage-cute-boy-isolated-white-background-vector-cartoon-illustration-vector-cartoon-illustration-teenage-boy-182166648.jpg","https://i.pinimg.com/736x/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg"]
var familymembernames=["Palpasa Batar","Deepak Batra","Aditya Batra","Avik Batra"]
var i = 0;
function update()
{
    i++
    var numbers_of_family_member_in_array= 4
    if(i== numbers_of_family_member_in_array)
{
i=0;
}
var updateImage = images[i];
var updateName= familymembernames[i];
document.getElementById("familyimage").src = updateImage;
document.getElementById("familymembername").innerHTML = updateName;
}