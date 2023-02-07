import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonOutiline from '../components/Buttons/ButtonOutline';
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import { LabelError } from '../components/Forms/LabelError';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido!' }),
  senha: z
    .string()
    .min(3, { message: 'Senha deve conter no minimo 3 caracteres' }),
});

type FormData = z.infer<typeof loginSchema>;

export function FormExample() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });





  const handleLogin = async ({ email, senha }: FormData) => {
    // dentro da função todos os dados já estão com a tipagem correta e validados :)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(email, senha);
  };




  
  return (
    <div className="main_container">
      <h2>Exemplo de formulário com validação usando React Hook Form</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <>
          <div className="label-float mt-3">
            <input
              type="email"
              placeholder=" "
              style={errors.email && { border: '1px solid red' }}
              {...register('email')}
            />
            <label>E-mail</label>
          </div>
          {errors.email && (
            <LabelError
              errorMessage={errors.email.message ?? 'Erro no campo senha'}
            />
          )}
          <div className="label-float mt-3">
            <input
              type="password"
              placeholder=" "
              {...register('senha')}
              style={errors.senha && { border: '1px solid red' }}
            />
            <label>Senha</label>
          </div>
          {errors.senha && (
            <LabelError
              errorMessage={errors.senha.message ?? 'Erro no campo senha'}
            />
          )}
          <span>Esqueceu a senha?</span>{' '}
          <span>
            <Link to={'#'}>Recuperar</Link>
          </span>
          <div>
            <ButtonPrimary
              type="submit"
              onClick={() => {}}
              disabled={isSubmitting}
            >
              Entrar
            </ButtonPrimary>
            <ButtonOutiline onClick={() => {}}>Cadastar</ButtonOutiline>
          </div>
        </>
      </form>
    </div>
  );
}
