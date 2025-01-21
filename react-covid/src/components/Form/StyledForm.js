import styled from "styled-components";

const StyledForm = styled.div`
 {
    margin: 5rem 0;
  }

  .form__left img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  .form__left {
    margin-bottom: 1rem;
    text-align: center;
  }

  .form__right {
    margin: 0 2rem;
    justify-content: center;
  }
  .form__brand h1 {
    font-size: 1.5rem;
    color: #06d6a0;
    text-align: center;
  }

  .form__title {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .form__status {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .form__jumlah {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .form__input {
    border: 2px solid #06d6a0;
    border-radius: 5px;
    width: 100%;
    margin: 8px 0;
    font-size: 1rem;
  }
  .form__submit {
    border-radius: 5px;
    width: 100%;
    padding: 8px 2px;
    margin: 8px 0;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    height: 3rem;
    font-size: 1rem;
  }
  input {
    height: 2rem;
  }
  .form__label {
    color: #000;
    text-align: left;
  }

  select {
    height: 3rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .form__left {
      text-align: center;
    }
    .form__right {
      width: 60%;
      margin: auto;
    }
    .form__input {
      border: 2px solid #06d6a0;
      border-radius: 5px;
      width: 100%;
      padding: 8px 6px;
      margin: 8px 0;
      border-radius: 10px;
    }
    
  }
  @media (min-width: 992px) {
    {
      margin: 10rem auto;
      padding: 0 10rem;
      max-width: 1000px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .form__brand h1{
      text-align: center;
    }
   
    .form__label {
      margin: 0 10rem 0 0;
    }
    .form__input {
      border: 2px solid #06d6a0;
      width: 100%;
      padding: 8px 6px;
      margin: 8px 0;
      background-color: #fff;
    }
    .form__right {
      width: 100%;
    }
    .form__submit {
      width: 100%;
      font-size: 1rem;
    }
    .form__label {
      text-align: left;
    }
    .form__left {
      flex-basis: 50%;
    }

    form {
      flex-basis: 40%;
    }

    .form__submit {
      align-items: center;
    }

    .form_jumlah{
      margin-bottom:1rem;
    }
  }
`;

export default StyledForm;
