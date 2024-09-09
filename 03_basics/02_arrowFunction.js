const user = {
    username:"amar",
    price:399,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
