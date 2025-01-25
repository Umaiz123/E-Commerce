import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2>Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.155139805481!2d77.62517770948052!3d13.025790787241503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1717792a22b3%3A0xf56f27891e5e8232!2sFine%20Fair%20Departmentals!5e0!3m2!1sen!2sin!4v1732256811997!5m2!1sen!2sin"
        width="80%"
        height="400"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form method="POST" action="" className="contact-inputs">
            <input
              type="text"
              name="Username"
              placeholder="UserName"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              placeholder="Enter the Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="send" />
          </form>{" "}
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
