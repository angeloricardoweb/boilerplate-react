import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LabelError } from '@components/Forms/LabelError';
import ButtonPrimary from '@components/Buttons/ButtonPrimary';
import ButtonOutline from '@components/Buttons/ButtonOutline';
import MainLayout from '@components/Layout/MainLayout';

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
    <MainLayout>
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
            <LabelError
              hasError={Boolean(errors.email)}
              errorMessage={errors.email?.message ?? 'Erro no campo senha'}
            />
            <div className="label-float mt-3">
              <input
                type="password"
                placeholder=" "
                {...register('senha')}
                style={errors.senha && { border: '1px solid red' }}
              />
              <label>Senha</label>
            </div>
            <LabelError
              hasError={Boolean(errors.senha)}
              errorMessage={errors.senha?.message ?? 'Erro no campo senha'}
            />
            <span>Esqueceu a senha?</span>{' '}
            <span>
              <Link to={'#'}>Recuperar</Link>
            </span>
            <div className='flex gap-3 py-4'>
              <ButtonPrimary
                type="submit"
                onClick={() => { }}
                disabled={isSubmitting}
              >
                Entrar
              </ButtonPrimary>
              <ButtonOutline onClick={() => { }}>Cadastar</ButtonOutline>
            </div>
          </>
        </form>
      </div>
    </MainLayout>
  );
}
