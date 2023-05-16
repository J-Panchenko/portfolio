import * as z from 'zod';
import { FormInput, FormTextarea } from 'components/Inputs';
import ContactInfo from 'components/ContactInfo';
import { CustomButton } from 'components/Buttons';
import { schemaForm } from 'data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './GetInTouch.scss';

type UserForm = z.infer<typeof schemaForm>;

function GetInTouch() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserForm>({
    resolver: zodResolver(schemaForm),
    mode: 'onChange',
    delayError: 500,
  });

  const onSubmit = (data: UserForm) => {
    alert(`Your data is valid: ${JSON.stringify(data, null, 2)}`);
    reset();
  };

  return (
    <section className="get-in-touch">
      <h1 className="get-in-touch__title">
        Get in touch
      </h1>
      <div className="get-in-touch__container">
        <form
          className="get-in-touch__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="get-in-touch__form-title">
            Open to cooperation and work proposals
          </h2>
          <div className="get-in-touch__form--top">
            <FormInput
              register={register}
              label="Name"
              registerName="name"
              errorMessage={errors.name?.message}
            />
            <FormInput
              register={register}
              label="Email"
              registerName="email"
              errorMessage={errors.email?.message}
            />
          </div>
          <FormTextarea
            register={register}
            placeholder="Write your message here..."
            label="Message"
            registerName="message"
            errorMessage={errors.message?.message}
            size="lg"
            resize="vertical"
            minHeight={200}
          />
          <CustomButton
            type="submit"
            text="Send Message"
            disabled={!isValid}
            colorScheme="secondary"
          />
        </form>
        <ContactInfo />
      </div>
    </section>
  );
}

export default GetInTouch;
