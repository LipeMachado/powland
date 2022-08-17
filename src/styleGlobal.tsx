import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --blue-dark: #0e091b;
        --black-light: #131313;
        --blue-card: #1a0d39;
        --blue-image-card: #0e091b;
        --black: #000000;
        --purple: #9357e6;
        --purple-dark: #7f5bbc;
        --purple-border: #5c26b4;
        --white-font: #fefefe;
        --gray-font: #AEAEAE;
        --green: #04D361;
        --purple-opacity: #2e0f5fb3;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4lJREFUWEftl1FIk1EUx/9qOGtNU4wkC1RQEc2hD9P5oigqH1PxIQqhgYI+iHtIE0ZQKoZo6BDniFScsIcgCSEILMPhJBRCh6G+qKSopHy2iVnOudniyDdZY3NTJ/rghcvGuPvO7/zP/557Pz+c8/A75/i4cAAERNPGzTMXyFEBfwAB6+vrqoiIiMcA9gFYzhrEEeAKgKC1tbX6nZ2dh3t7e3UJCQnvAJgBWM8KxBkgWKvV3g8KCnoZFxfHZ1l2fHV1tS4vL+8rgD1OFZ+WxREgAMCN0tLSex0dHR9DQkJ4ra2tkMlkFoPBoGppaWlTqVQGrix/fUXhCEDfQwDcMRqNY9nZ2YKpqSkkJydDoVBYExMTN7a3t5vi4+M1AHZ9VRbnbXgdQOTs7OzbtrY2YV9f32GiUqkU7e3tFpPJNL6ystKckZExyvmDzHri4QxwFUDE2NhYvV6vL5HJZIHOT6ay1NTU2FiW7RoYGFBUVVWtnKYszgAU8KZarS5JSkpqEIlEfFepRUdHo7e3dzclJWVrc3NTERMT8/qkZXEGICOGSSQSYX9//yCfz6et6XYUFxdDrVbTNp1YWlpqT01NHTxuWZwB7Ea8y7LsF4ZhgicnJ90C8Hg8ZGZmQiwWo6GhAQaD4VV4ePgTDoK6qcfh6iw4MOL09PSbzs7O1O7u7v8eEhsbC4lEgtzcXLNYLPa32WyW5eXlaaPR+Hlubm64srJyAsAOAK+2qisAMuItnU73fH5+/lF5efmhEaurq9HY2GhZWFhYWlxcnNRqtd9UKtUsgF8AqEf8BLDF+eHEClDA8J6engcikahJKBReIwnS0tIwMjKyL5fLXyiVSqoLBfrDZWsCQJMyt/cIj/LTAlcKkBFDs7KykoaGhoYDAwPpkIJOp9u1Wq0fcnJyOgFscFlTMGrRdFbQpJ7glfR2OlcAjkbUMQwTWlBQgLKystWoqCgpgGVObsqYgh4roLMs7i4kZMTbMzMzGqVSmdbV1UXt+Gltbe17AD8A/PbVweQO4MCIo6OjcoFAIDWbzZ/S09ObAVDX2+Rk96rGnha5AyAjhmk0msL8/PxnDMOU6fX67wBYzmxeOdxTcHcmpN/JiILCwsLIiooKcVFR0TCX+bavpD/KhHYwHt2QAFA7JqfbHe9NYl6vOepWfHBHBECftL1o+kx6Twp4ncFpF16494LTJnTs/18qcKnAPygqQzAAgQjBAAAAAElFTkSuQmCC), default;
        background-color: var(--blue-dark);
        color: var(--white-font);
    }

    html {
        scroll-behavior: smooth;
        font-family: 'Poppins', sans-serif;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--blue-dark);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--purple);
        border-radius: 8px;
    }
`;