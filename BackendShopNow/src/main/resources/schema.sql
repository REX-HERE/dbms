drop database shopNow;
create database shopNow;

use shopNow;
create table user (
  userId varchar(225) primary key not NULL,
  firstName varchar(225),
  lastName varchar(225),
  type varchar(225) default "customer",
  password varchar(225),
  address varchar(516)
);

insert into user values ("Chirag","Chirag","Tank","customer","Chirag123","Nawalgarh");
insert into user values ("Punit","Punit","Meena","admin","Punit123","Sawaimadhopur");
insert into user values ("Anand","Anand","Mishra","seller","Anand123","Godha");
insert into user values ("Jayesh","Jayesh","Gat","seller","Jayesh123","Maharashtra");
insert into user values ("Shivam","Shivam","Kulhari","customer","Shivam123","Chirawa");
insert into user values ("Snehal","Snehal","Singh","customer","Snehal123","Banaras");
insert into user values ("Rohan","Rohan","Kaushal","customer","Rohan123","Patiala");
insert into user values ("Milan","Milan","Somani","customer","Milan123","MadhyaPradesh");
insert into user values ("Subhash","Subhash","Sheoran","customer","Subhash123","Haryana");
insert into user values ("Gourav","Gourav","Kumar","customer","Gourav123","Delhi");
insert into user values ("harsh","harsh","Pratheek","customer","Harsh123","Delhi");
insert into user values ("Deepanshu","Deepanshu","Verma","customer","Deepanshu123","Chattishgarh");
insert into user values ("Deepesh","Deepesh","Tank","customer","Deepesh123","Delhi");
insert into user values ("Anas","Anas","Khan","customer","Anas123","Delhi");
insert into user values ("Nitin","Nitin","Sharma","customer","Nitin123","Mumbai");
insert into user values ("Rahul","Rahul","Shrestha","customer","Rahul123","Pilani");
insert into user values ("Priyanshu","Priyanshu","Verma","customer","Priyanshu123","Up");
insert into user values ("Raman","Raman","Priyanshu","customer","Raman123","Himachal");
insert into user values ("Shalini","Shalini","Singh","customer","Shalini123","Delhi");
insert into user values ("Sri","Sri","Prada","customer","Sri123","Delhi");



create table userContactInfo (
	userId varchar(225) not null,
    phoneNo varchar(225),
    foreign key(userId) references user(userId) on delete cascade,
    primary key (userId,phoneNo)
);

insert into userContactInfo values ("Chirag","123456789");
insert into userContactInfo values ("Chirag","123456780");
insert into userContactInfo values ("Shivam","173456700");
insert into userContactInfo values ("Shalini","123466700");
insert into userContactInfo values ("Milan","123856700");


create table userEmailInfo (
	userId varchar(225) not null,
    email varchar(225),
	foreign key(userId) references user(userId) on delete cascade,
    primary key(userId,email)
);

insert into userEmailInfo values ("Chirag","chirag@gmail.com");
insert into userEmailInfo values ("Punit","punit@gmail.com");
insert into userEmailInfo values ("Anand","anand@gmail.com");
insert into userEmailInfo values ("Shivam","shivam@gmail.com");
insert into userEmailInfo values ("Shalini","shalini@gmail.com");
insert into userEmailInfo values ("Sri","sri@gmail.com");



create table product (
	productId varchar(255) ,
    productName varchar(225) ,
    price int,
    productDescription varchar(512),
    brandName varchar(255) ,
    categoryName varchar(255),
    availableQuantity int default 100,
    ratings int default 4,
    imageUrl varchar(516) default "image url",
    verificationStatus varchar(225) default "verified",
    primary key (productId)

);

insert into product values ("30","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Blue_Shirt_oyf1rm.jpg","verified");
insert into product values ("31","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Blue_Jeans_xwqyvp.jpg","verified");
insert into product values ("32","M32",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/M32_vu4kvj.jpg","verified");
insert into product values ("33","Airdopes 141",2000,"42H playtime, Water Resistance, Smooth Touch Controls","Boat","Earphones",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Airdopes_141_omoytr.jpg","verified");
insert into product values ("34","Inspiron",50000,"intel i5-1115G4, 8GB, 2GB SSD, Win 11, Carbon Black","Dell","Laptop",25,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Dell_Inspiron_qgmtjr.jpg","verified");
insert into product values ("35","Black Shoes",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Shoes",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Black_Shoes_trgml0.jpg","verified");
insert into product values ("36","Rich Dad Poor Dad",600," What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not","Solomon","Book",200,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/RichDadPoorDad_lkhgjp.jpg","verified");
insert into product values ("37","Blue Pen",300,"3 dimple tip technology, 0.7mm fine tip","Pilot","Pen",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Blue_pen_mfawlz.webp","verified");
insert into product values ("38","Watch",800,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Titan_Wrist_Watch_kah5bw.jpg","verified");
insert into product values ("39","Water Bottle",1000,"Stainless Steel 950 ml Silver Freezer Safe Insulated","Milton","Bottle",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Water_Bottle_us6u9g.jpg","verified");

insert into product values("40","Skipping Rope",300,"Jump Rope for Exercise Workout & Weight Loss - Tangle Free Jumping Rope for Kids","BoldFit","Health",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Skipping_rope_n4ehm3.webp","verified");
insert into product values("41","Crocs",700,"Crostile Material, Light weight, Easy to Clean and dry","Crocs","Footwear",100,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664618/DBMS2/Crocs_bagb5t.jpg","verified");
insert into product values("42","Blue Shoes",8000,"Sole: Ethylene Vinyl Acetate, Closure: Lace-Up","Adidas","Footwear",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664618/DBMS2/Blue_Shoes_aee7ob.jpg","verified");
insert into product values("43","Extension Board",900,"10V Heavy Duty 6A Four-Way 2400W Extension Board and Wire","Havells","Electronics",10,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Ext_Board_e6y1zy.jpg","verified");
insert into product values("44","Apple iPhone 13",100000,"15 cm (6.1-inch) Super Retina XDR display, Cinematic mode, Advanced Dual Camera","Apple","Mobile",30,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Iphone_coh1pi.jpg","verified");
insert into product values("45","HP Laptop",60000,"Screen Size 14 inches, Colour Silver CPU Model Core i5,RAM 16GB , OS Windows 11","HP","Laptop",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/hp_laptop_qjkvvz.webp","verified");
insert into product values("46","Refrigerator",50000,"Samsung 253 L 2 Star Frost-Free Double Door Refrigerator (RT28B3922S9/HL, Refined Inox, Convertible)","Samsung","Electronics",20,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664616/DBMS2/Refrigerator_auequ1.jpg","verified");
insert into product values("47","Wireless Mouse",400,"Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Wireless_Mouse_bjdyoa.jpg","verified");
insert into product values("48","Sweat Shirt",700,"The Modern Soul Men's Printed Sweatshirt Hoodie","Adidas","Fashion",40,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Sweat_shirt_bjwpiz.jpg","verified");
insert into product values("49","Women Shoes",600,"Running Shoes, Rubber Sole, Closure Lace Up, Fit type Regular, pink color","Campus","Footwear",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Women_Footwear_nemlpc.jpg","verified");

insert into product values ("50","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt2_eqkiu3.jpg","verified");
insert into product values ("51","Blue Shirt",500,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt3_cgobjo.jpg","verified");
insert into product values ("52","Blue Shirt",400,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt4_hbo3s4.jpg","verified");
insert into product values ("53","Blue Shirt",700,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt5_tx11uh.jpg","verified");
insert into product values ("54","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt6_wujjwu.jpg","verified");
insert into product values ("55","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt1_mi8faz.jpg","verified");

insert into product values ("56","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans4_spjqcw.jpg","verified");
insert into product values ("57","Blue Jeans",1000,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans5_huk0wf.jpg","verified");
insert into product values ("58","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans1_ftigzb.jpg","verified");
insert into product values ("59","Blue Jeans",800,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans2_uakidn.jpg","verified");
insert into product values ("60","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans3_odsxxw.jpg","verified");
insert into product values ("61","Blue Jeans",1000,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPolojeans6_luvdmw.jpg","verified");

insert into product values("62","Wireless Mouse",400,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics3_n4nxqx.jpg","verified");
insert into product values("63","Gaming Mouse",500,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics4_tjcufl.jpg","verified");
insert into product values("64","Wireless Keyboard",400,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics2_zfymzt.jpg","verified");
insert into product values("65","Wireless Keyboard",300,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics1_htm5as.jpg","verified");
insert into product values("66","Earphones",400,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969644/Products/Logitech%20Electronics/LogitechElectronics6_sgsw9d.jpg","verified");
insert into product values("67","Speakers",800,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969644/Products/Logitech%20Electronics/LogitechElectronics5_ykiozf.jpg","verified");

insert into product values ("68","Black Shoes",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968861/Products/adidas%20footwear/shoe2_h4ezlz.jpg","verified");
insert into product values ("69","Black Shoes",6000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968854/Products/adidas%20footwear/shoe1_pf4hxf.jpg","verified");
insert into product values ("70","Sandals",5000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968661/Products/adidas%20footwear/adidas5_bl57ls.jpg","verified");
insert into product values ("71","Sandals",4000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968654/Products/adidas%20footwear/adidas4_tgvaci.jpg","verified");
insert into product values ("72","Sandals",6000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968648/Products/adidas%20footwear/adidas3_suqt6i.jpg","verified");
insert into product values ("73","Sandals",3000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968641/Products/adidas%20footwear/adidas2_v4idxm.jpg","verified");
insert into product values ("74","Sandals",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968632/Products/adidas%20footwear/adidas1_tm101g.jpg","verified");

insert into product values ("75","Watch",800,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch2_uzj70w.jpg","verified");
insert into product values ("76","Watch",900,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch1_s0x5n7.jpg","verified");
insert into product values ("77","Watch",700,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch4_qa3n7i.jpg","verified");
insert into product values ("78","Watch",600,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch3_lxtyel.jpg","verified");
insert into product values ("79","Watch",1000,"Diigtal, Connectibility to Mobile, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch6_k1q9tm.jpg","verified");
insert into product values ("80","Watch",1200,"Digital, Connectibility to Mobile, Case Shape Square","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch5_xz8nkd.jpg","verified");

insert into product values ("81","S22",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967110/Products/Saamsung%20Mobile/SamsungMobile5_juswhi.jpg","verified");
insert into product values ("82","ZFlip4",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967110/Products/Saamsung%20Mobile/SamsungMobile4_wkf81h.jpg","verified");
insert into product values ("83","F13",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967111/Products/Saamsung%20Mobile/SamsungMobile3_yh4gkr.jpg","verified");
insert into product values ("84","M13",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967111/Products/Saamsung%20Mobile/SamsungMobile2_qi18hp.jpg","verified");
insert into product values ("85","M33",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967110/Products/Saamsung%20Mobile/SamsungMobile6_kq8xrd.jpg","verified");
insert into product values ("86","M53",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967111/Products/Saamsung%20Mobile/SamsungMobile1_r3vekl.jpg","verified");


create table shoppingCart(
	userId varchar(225),
    productId varchar(255),
    productQuantity int default 1,
    foreign key (userId) references user(userId) on delete cascade,
    foreign key (productId) references product(productId) on delete cascade,
    primary key (userId,productId)
);

insert into shoppingCart values ("Chirag","30",2);
insert into shoppingCart values ("Chirag","31",2);
insert into shoppingCart values ("Chirag","32",2);
insert into shoppingCart values ("Chirag","33",2);
insert into shoppingCart values ("Chirag","34",2);
insert into shoppingCart values ("Chirag","35",2);
insert into shoppingCart values ("Chirag","36",2);
insert into shoppingCart values ("Chirag","37",2);

insert into shoppingCart values ("Shivam","38",2);
insert into shoppingCart values ("Shivam","39",2);
insert into shoppingCart values ("Shivam","40",2);
insert into shoppingCart values ("Shivam","41",2);
insert into shoppingCart values ("Shivam","42",2);
insert into shoppingCart values ("Shivam","43",2);
insert into shoppingCart values ("Shivam","44",2);
insert into shoppingCart values ("Shivam","45",2);

insert into shoppingCart values ("Milan","30",2);
insert into shoppingCart values ("Milan","46",2);
insert into shoppingCart values ("Milan","32",2);
insert into shoppingCart values ("Milan","47",2);
insert into shoppingCart values ("Milan","48",2);
insert into shoppingCart values ("Milan","35",2);
insert into shoppingCart values ("Milan","50",2);
insert into shoppingCart values ("Milan","53",2);

insert into shoppingCart values ("Rohan","54",2);
insert into shoppingCart values ("Rohan","58",2);
insert into shoppingCart values ("Rohan","56",2);
insert into shoppingCart values ("Rohan","62",2);
insert into shoppingCart values ("Rohan","64",2);
insert into shoppingCart values ("Rohan","61",2);
insert into shoppingCart values ("Rohan","81",2);
insert into shoppingCart values ("Rohan","82",2);
# select * from shoppingCart;



create table orders(
	orderId  varchar(255),
    userId varchar(225),
    orderTime timestamp not null default current_timestamp,
    deliveryAddress varchar(512) ,
    foreign key (userId) references user(userId)on delete cascade,
    primary key (orderId)
);


insert into orders (orderId,userId,deliveryAddress) values ("1","Chirag","Nawalgarh");
insert into orders (orderId,userId,deliveryAddress) values ("2","Shivam","Chirawa");
insert into orders (orderId,userId,deliveryAddress) values ("3","Milan","Banaras");
insert into orders (orderId,userId,deliveryAddress) values ("4","Rohan","Patiala");
insert into orders (orderId,userId,deliveryAddress) values ("5","Shalini","Haryana");
insert into orders (orderId,userId,deliveryAddress) values ("6","Chirag","Delhi");

# select * from orders;

drop table orderInfo;
create table orderInfo(
	orderId varchar(255),
    productId varchar(255),
  	productQuantity int,
    foreign key(orderId) references orders(orderId) on delete cascade,
    foreign key(productId) references product(productId) on delete cascade,
    primary key(orderId , productId)
);



create table soldBy (
	userId varchar(225),
    productId varchar(255),
    discount int default 0,
    primary key(userId , productId),
    foreign key (userid) references  user(userId) on delete cascade,
    foreign key (productId) references product(productId) on delete cascade
);


insert into soldBy values ("Anand",1,20);
insert into soldBy values ("Anand",2,10);
insert into soldBy values ("Anand",3,20);
insert into soldBy values ("Jayesh",4,30);
insert into soldBy values ("Jayesh",5,10);
insert into soldBy values ("Jayesh",6,40);
insert into soldBy values ("Jayesh",7,20);
insert into soldBy values ("Anand",8,30);
insert into soldBy values ("Jayesh",9,10);
insert into soldBy values ("Jayesh",10,10);




select * from product;

select p.productId, p.productName, p.price, p.productDescription, p.brandName, p.categoryName, p.availableQuantity, p.ratings, p.imageUrl, p.verificationStatus, o.productQuantity
                from product as p, orderInfo as o where p.productId=o.productId and o.orderId="0c9807b5-1c17-4954-bc90-9c7893189ef5";



select p.productId, p.productName, p.price, p.productDescription, p.brandName, p.categoryName, p.availableQuantity, p.ratings, p.imageUrl, p.verificationStatus, o.productQuantity
                 from product as p, orderInfo as o where p.productId=o.productId and o.orderId="80a94d3d-b8c1-4cc0-bd84-d7d5b3b7bfc8";

select * from orders;
select * from orderInfo;

select * from shoppingCart;
insert into shoppingCart values("5","1","6");

select * from user where userId="harsh" and type="customer" and password="Harsh123";



// new ones

drop database shopNow;
    email varchar(225),
	foreign key(userId) references user(userId) on delete cascade,
    primary key(userId,email)
);

insert into userEmailInfo values ("Chirag","chirag@gmail.com");
insert into userEmailInfo values ("Punit","punit@gmail.com");
insert into userEmailInfo values ("Anand","anand@gmail.com");
insert into userEmailInfo values ("Shivam","shivam@gmail.com");
insert into userEmailInfo values ("Shalini","shalini@gmail.com");
insert into userEmailInfo values ("Sri","sri@gmail.com");



create table product (
	productId varchar(255) ,
    productName varchar(225) ,
    price int,
    productDescription varchar(512),
    brandName varchar(255) ,
    categoryName varchar(255),
    availableQuantity int default 100,
    ratings int default 4,
    imageUrl varchar(516) default "image url",
    verificationStatus varchar(225) default "verified",
    primary key (productId)

);

insert into product values ("30","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Blue_Shirt_oyf1rm.jpg","verified");
insert into product values ("31","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Blue_Jeans_xwqyvp.jpg","verified");
insert into product values ("32","M32",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/M32_vu4kvj.jpg","verified");
insert into product values ("33","Airdopes 141",2000,"42H playtime, Water Resistance, Smooth Touch Controls","Boat","Earphones",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Airdopes_141_omoytr.jpg","verified");
insert into product values ("34","Inspiron",50000,"intel i5-1115G4, 8GB, 2GB SSD, Win 11, Carbon Black","Dell","Laptop",25,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Dell_Inspiron_qgmtjr.jpg","verified");
insert into product values ("35","Black Shoes",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Shoes",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Black_Shoes_trgml0.jpg","verified");
insert into product values ("36","Rich Dad Poor Dad",600," What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not","Solomon","Book",200,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/RichDadPoorDad_lkhgjp.jpg","verified");
insert into product values ("37","Blue Pen",300,"3 dimple tip technology, 0.7mm fine tip","Pilot","Pen",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Blue_pen_mfawlz.webp","verified");

create database shopNow;

use shopNow;
create table user (
  userId varchar(225) primary key not NULL,
  firstName varchar(225),
  lastName varchar(225),
  type varchar(225) default "customer",
  password varchar(225),
  address varchar(516)
);

insert into user values ("Chirag","Chirag","Tank","customer","Chirag123","Nawalgarh");
insert into user values ("Punit","Punit","Meena","admin","Punit123","Sawaimadhopur");
insert into user values ("Anand","Anand","Mishra","seller","Anand123","Godha");
insert into user values ("Jayesh","Jayesh","Gat","seller","Jayesh123","Maharashtra");
insert into user values ("Shivam","Shivam","Kulhari","customer","Shivam123","Chirawa");
insert into user values ("Snehal","Snehal","Singh","customer","Snehal123","Banaras");
insert into user values ("Rohan","Rohan","Kaushal","customer","Rohan123","Patiala");
insert into user values ("Milan","Milan","Somani","customer","Milan123","MadhyaPradesh");
insert into user values ("Subhash","Subhash","Sheoran","customer","Subhash123","Haryana");
insert into user values ("Gourav","Gourav","Kumar","customer","Gourav123","Delhi");
insert into user values ("harsh","harsh","Pratheek","customer","Harsh123","Delhi");
insert into user values ("Deepanshu","Deepanshu","Verma","customer","Deepanshu123","Chattishgarh");
insert into user values ("Deepesh","Deepesh","Tank","customer","Deepesh123","Delhi");
insert into user values ("Anas","Anas","Khan","customer","Anas123","Delhi");
insert into user values ("Nitin","Nitin","Sharma","customer","Nitin123","Mumbai");
insert into user values ("Rahul","Rahul","Shrestha","customer","Rahul123","Pilani");
insert into user values ("Priyanshu","Priyanshu","Verma","customer","Priyanshu123","Up");
insert into user values ("Raman","Raman","Priyanshu","customer","Raman123","Himachal");
insert into user values ("Shalini","Shalini","Singh","customer","Shalini123","Delhi");
insert into user values ("Sri","Sri","Prada","customer","Sri123","Delhi");



create table userContactInfo (
	userId varchar(225) not null,
    phoneNo varchar(225),
    foreign key(userId) references user(userId) on delete cascade,
    primary key (userId,phoneNo)
);

insert into userContactInfo values ("Chirag","123456789");
insert into userContactInfo values ("Chirag","123456780");
insert into userContactInfo values ("Shivam","173456700");
insert into userContactInfo values ("Shalini","123466700");
insert into userContactInfo values ("Milan","123856700");


create table userEmailInfo (
	userId varchar(225) not null,
insert into product values ("38","Watch",800,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Titan_Wrist_Watch_kah5bw.jpg","verified");
insert into product values ("39","Water Bottle",1000,"Stainless Steel 950 ml Silver Freezer Safe Insulated","Milton","Bottle",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Water_Bottle_us6u9g.jpg","verified");

insert into product values("40","Skipping Rope",300,"Jump Rope for Exercise Workout & Weight Loss - Tangle Free Jumping Rope for Kids","BoldFit","Health",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Skipping_rope_n4ehm3.webp","verified");
insert into product values("41","Crocs",700,"Crostile Material, Light weight, Easy to Clean and dry","Crocs","Footwear",100,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664618/DBMS2/Crocs_bagb5t.jpg","verified");
insert into product values("42","Blue Shoes",8000,"Sole: Ethylene Vinyl Acetate, Closure: Lace-Up","Adidas","Footwear",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664618/DBMS2/Blue_Shoes_aee7ob.jpg","verified");
insert into product values("43","Extension Board",900,"10V Heavy Duty 6A Four-Way 2400W Extension Board and Wire","Havells","Electronics",10,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Ext_Board_e6y1zy.jpg","verified");
insert into product values("44","Apple iPhone 13",100000,"15 cm (6.1-inch) Super Retina XDR display, Cinematic mode, Advanced Dual Camera","Apple","Mobile",30,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Iphone_coh1pi.jpg","verified");
insert into product values("45","HP Laptop",60000,"Screen Size 14 inches, Colour Silver CPU Model Core i5,RAM 16GB , OS Windows 11","HP","Laptop",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/hp_laptop_qjkvvz.webp","verified");
insert into product values("46","Refrigerator",50000,"Samsung 253 L 2 Star Frost-Free Double Door Refrigerator (RT28B3922S9/HL, Refined Inox, Convertible)","Samsung","Electronics",20,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664616/DBMS2/Refrigerator_auequ1.jpg","verified");
insert into product values("47","Wireless Mouse",400,"Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Wireless_Mouse_bjdyoa.jpg","verified");
insert into product values("48","Sweat Shirt",700,"The Modern Soul Men's Printed Sweatshirt Hoodie","Adidas","Fashion",40,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Sweat_shirt_bjwpiz.jpg","verified");
insert into product values("49","Women Shoes",600,"Running Shoes, Rubber Sole, Closure Lace Up, Fit type Regular, pink color","Campus","Footwear",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Women_Footwear_nemlpc.jpg","verified");

insert into product values ("50","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt2_eqkiu3.jpg","verified");
insert into product values ("51","Blue Shirt",500,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt3_cgobjo.jpg","verified");
insert into product values ("52","Blue Shirt",400,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt4_hbo3s4.jpg","verified");
insert into product values ("53","Blue Shirt",700,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt5_tx11uh.jpg","verified");
insert into product values ("54","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt6_wujjwu.jpg","verified");
insert into product values ("55","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966503/Van%20Hussen%20Shirt/VanHussenShirt1_mi8faz.jpg","verified");

insert into product values ("56","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans4_spjqcw.jpg","verified");
insert into product values ("57","Blue Jeans",1000,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans5_huk0wf.jpg","verified");
insert into product values ("58","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans1_ftigzb.jpg","verified");
insert into product values ("59","Blue Jeans",800,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans2_uakidn.jpg","verified");
insert into product values ("60","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPoloJeans3_odsxxw.jpg","verified");
insert into product values ("61","Blue Jeans",1000,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667966739/Products/US%20Polo%20Jeans/UsPolojeans6_luvdmw.jpg","verified");

insert into product values("62","Wireless Mouse",400,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics3_n4nxqx.jpg","verified");
insert into product values("63","Gaming Mouse",500,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics4_tjcufl.jpg","verified");
insert into product values("64","Wireless Keyboard",400,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics2_zfymzt.jpg","verified");
insert into product values("65","Wireless Keyboard",300,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969643/Products/Logitech%20Electronics/LogitechElectronics1_htm5as.jpg","verified");
insert into product values("66","Earphones",400,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969644/Products/Logitech%20Electronics/LogitechElectronics6_sgsw9d.jpg","verified");
insert into product values("67","Speakers",800,"2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969644/Products/Logitech%20Electronics/LogitechElectronics5_ykiozf.jpg","verified");

insert into product values ("68","Black Shoes",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968861/Products/adidas%20footwear/shoe2_h4ezlz.jpg","verified");
insert into product values ("69","Black Shoes",6000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968854/Products/adidas%20footwear/shoe1_pf4hxf.jpg","verified");
insert into product values ("70","Sandals",5000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968661/Products/adidas%20footwear/adidas5_bl57ls.jpg","verified");
insert into product values ("71","Sandals",4000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968654/Products/adidas%20footwear/adidas4_tgvaci.jpg","verified");
insert into product values ("72","Sandals",6000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968648/Products/adidas%20footwear/adidas3_suqt6i.jpg","verified");
insert into product values ("73","Sandals",3000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968641/Products/adidas%20footwear/adidas2_v4idxm.jpg","verified");
insert into product values ("74","Sandals",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Adidas","Footwear",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667968632/Products/adidas%20footwear/adidas1_tm101g.jpg","verified");

insert into product values ("75","Watch",800,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch2_uzj70w.jpg","verified");
insert into product values ("76","Watch",900,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch1_s0x5n7.jpg","verified");
insert into product values ("77","Watch",700,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch4_qa3n7i.jpg","verified");
insert into product values ("78","Watch",600,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch3_lxtyel.jpg","verified");
insert into product values ("79","Watch",1000,"Diigtal, Connectibility to Mobile, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch6_k1q9tm.jpg","verified");
insert into product values ("80","Watch",1200,"Digital, Connectibility to Mobile, Case Shape Square","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667969058/Products/Titan%20Watch/TitanWatch5_xz8nkd.jpg","verified");

insert into product values ("81","S22",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967110/Products/Saamsung%20Mobile/SamsungMobile5_juswhi.jpg","verified");
insert into product values ("82","ZFlip4",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967110/Products/Saamsung%20Mobile/SamsungMobile4_wkf81h.jpg","verified");
insert into product values ("83","F13",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967111/Products/Saamsung%20Mobile/SamsungMobile3_yh4gkr.jpg","verified");
insert into product values ("84","M13",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967111/Products/Saamsung%20Mobile/SamsungMobile2_qi18hp.jpg","verified");
insert into product values ("85","M33",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967110/Products/Saamsung%20Mobile/SamsungMobile6_kq8xrd.jpg","verified");
insert into product values ("86","M53",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667967111/Products/Saamsung%20Mobile/SamsungMobile1_r3vekl.jpg","verified");


create table shoppingCart(
	userId varchar(225),
    productId varchar(255),
    productQuantity int default 1,
    foreign key (userId) references user(userId) on delete cascade,
    foreign key (productId) references product(productId) on delete cascade,
    primary key (userId,productId)
);

insert into shoppingCart values ("Chirag","30",2);
insert into shoppingCart values ("Chirag","31",2);
insert into shoppingCart values ("Chirag","32",2);
insert into shoppingCart values ("Chirag","33",2);
insert into shoppingCart values ("Chirag","34",2);
insert into shoppingCart values ("Chirag","35",2);
insert into shoppingCart values ("Chirag","36",2);
insert into shoppingCart values ("Chirag","37",2);

insert into shoppingCart values ("Shivam","38",2);
insert into shoppingCart values ("Shivam","39",2);
insert into shoppingCart values ("Shivam","40",2);
insert into shoppingCart values ("Shivam","41",2);
insert into shoppingCart values ("Shivam","42",2);
insert into shoppingCart values ("Shivam","43",2);
insert into shoppingCart values ("Shivam","44",2);
insert into shoppingCart values ("Shivam","45",2);

insert into shoppingCart values ("Milan","30",2);
insert into shoppingCart values ("Milan","46",2);
insert into shoppingCart values ("Milan","32",2);
insert into shoppingCart values ("Milan","47",2);
insert into shoppingCart values ("Milan","48",2);
insert into shoppingCart values ("Milan","35",2);
insert into shoppingCart values ("Milan","50",2);
insert into shoppingCart values ("Milan","53",2);

insert into shoppingCart values ("Rohan","54",2);
insert into shoppingCart values ("Rohan","58",2);
insert into shoppingCart values ("Rohan","56",2);
insert into shoppingCart values ("Rohan","62",2);
insert into shoppingCart values ("Rohan","64",2);
insert into shoppingCart values ("Rohan","61",2);
insert into shoppingCart values ("Rohan","81",2);
insert into shoppingCart values ("Rohan","82",2);
# select * from shoppingCart;



create table orders(
	orderId  varchar(255),
    userId varchar(225),
    orderTime timestamp not null default current_timestamp,
    deliveryAddress varchar(512) ,
    foreign key (userId) references user(userId)on delete cascade,
    primary key (orderId)
);


insert into orders (orderId,userId,deliveryAddress) values ("1","Chirag","Nawalgarh");
insert into orders (orderId,userId,deliveryAddress) values ("2","Shivam","Chirawa");
insert into orders (orderId,userId,deliveryAddress) values ("3","Milan","Banaras");
insert into orders (orderId,userId,deliveryAddress) values ("4","Rohan","Patiala");
insert into orders (orderId,userId,deliveryAddress) values ("5","Shalini","Haryana");
insert into orders (orderId,userId,deliveryAddress) values ("6","Chirag","Delhi");

# select * from orders;

drop table orderInfo;
create table orderInfo(
	orderId varchar(255),
    productId varchar(255),
  	productQuantity int,
    foreign key(orderId) references orders(orderId) on delete cascade,
    foreign key(productId) references product(productId) on delete cascade,
    primary key(orderId , productId)
);



create table soldBy (
	userId varchar(225),
    productId varchar(255),
    discount int default 0,
    primary key(userId , productId),
    foreign key (userid) references  user(userId) on delete cascade,
    foreign key (productId) references product(productId) on delete cascade
);


insert into soldBy values ("Anand",1,20);
insert into soldBy values ("Anand",2,10);
insert into soldBy values ("Anand",3,20);
insert into soldBy values ("Jayesh",4,30);
insert into soldBy values ("Jayesh",5,10);
insert into soldBy values ("Jayesh",6,40);
insert into soldBy values ("Jayesh",7,20);
insert into soldBy values ("Anand",8,30);
insert into soldBy values ("Jayesh",9,10);
insert into soldBy values ("Jayesh",10,10);




select * from product;

select p.productId, p.productName, p.price, p.productDescription, p.brandName, p.categoryName, p.availableQuantity, p.ratings, p.imageUrl, p.verificationStatus, o.productQuantity
                from product as p, orderInfo as o where p.productId=o.productId and o.orderId="0c9807b5-1c17-4954-bc90-9c7893189ef5";



select p.productId, p.productName, p.price, p.productDescription, p.brandName, p.categoryName, p.availableQuantity, p.ratings, p.imageUrl, p.verificationStatus, o.productQuantity
                 from product as p, orderInfo as o where p.productId=o.productId and o.orderId="80a94d3d-b8c1-4cc0-bd84-d7d5b3b7bfc8";

select * from orders;
select * from orderInfo;

select * from shoppingCart;
insert into shoppingCart values("5","1","6");

select * from user where userId="harsh" and type="customer" and password="Harsh123";