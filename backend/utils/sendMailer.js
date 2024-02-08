// Import necessary modules
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

// Function to send email
const sendEmail = async (email, subject, text) => {
    try {
        // Create SES client
        const ses = new SESClient({
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            },
            region: process.env.AWS_REGION
        });

        // Construct email parameters
        const params = {
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Body: {
                    Text: {
                        Data: text
                    }
                },
                Subject: {
                    Data: subject
                }
            },
            Source: process.env.USER
        };

        // Send email
        const response = await ses.send(new SendEmailCommand(params));

        // Log success message
        console.log("Email sent successfully");
        console.log("Message ID:", response.MessageId);
    } catch (error) {
        // Log error message
        console.error("Email not sent!");
        console.error(error);
    }
};


module.exports ={sendEmail}

// Example usage:
//  sendEmail('devbharath.kathirvel@axesstechnology.in', 'Test Email', 'This is a test email from AWS SES.');
