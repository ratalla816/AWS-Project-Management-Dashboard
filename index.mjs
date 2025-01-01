// Lambda Trigger Functions

import https from "node:https";

export const handler = async (event) => {
    const postData = JSON.stringify({
        username: event.request.userAttributes["preferred_username"] || event.userName,
        cognitoId: event.userName,
        profilePictureUrl: "i1.jpg",
        teamId: 1
       });
    
    
    const options = {
        hostname: "70nlkwfw7i.execute-api.us-east-2.amazonaws.com",
        port: 443,
        path: "/create-user",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    };
    
//     return new Promise((resolve, reject) => {
//         const req = https.request(options, (res) => {
//             res.setEncoding("utf8");
//             let responseBody = "";
//             res.on("data", (chunk) => responseBody += chunk);
//             res.on("end", () => resolve(responseBody));
//       });
       
//       req.on("error", (error) => reject(error));
//          req.write(postData);
//          req.end();
//     })
// };


    const responseBody = await new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", chunk => body += chunk);
            res.on("end", () => resolve(body));
        });
        
        req.on("error", reject);
        req.write(postData);
        req.end();
    });

    return event; 
};
