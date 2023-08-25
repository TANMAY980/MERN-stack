export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },{
      field:"user",headerName:"User",width:230,renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
      }
    },
    {
        field:"email",headerName:"Email",width:230,
    },
    {
        field:"age",headerName:"Age",width:100,
    },
    {
    
        field:"status",headerName:"Status",width:160,renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        }
        
    }
];






export const userRows=[
    {
        id:1,
        username:"snow",
        img:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
        email:"1snow@gmail.com",
        age:35,
        status:"active",
    },
    {
        id:2,
        username:"snow",
        img:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
        email:"1snow@gmail.com",
        age:35,
        status:"passive",
    },
    {
        id:3,
        username:"snow",
        img:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
        email:"1snow@gmail.com",
        age:35,
        status:"active",
    },
    {
        id:4,
        username:"snow",
        img:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
        email:"1snow@gmail.com",
        age:35,
        status:"pending",
    },
    {
        id:5,
        username:"snow",
        img:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
        email:"1snow@gmail.com",
        age:35,
        status:"passive",
    },
    {
        id:6,
        username:"snow",
        img:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
        email:"1snow@gmail.com",
        age:35,
        status:"pending",
    },
]