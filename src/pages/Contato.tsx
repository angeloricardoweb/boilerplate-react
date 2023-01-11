import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ButtonOutiline from '../components/Buttons/ButtonOutline';
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import LabelError from '../components/Forms/LabelError';

export default function Contato() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  async function handleLogin({ email, senha }: any) {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log(email, senha);
  }

  return (
    <div className='main_container'>
      <h2>Exemplo de formulário com validação usando React Hook Form</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <>
          <div className="label-float mt-3">
            <input
              type="email"
              placeholder=" "
              style={errors.email && { border: '1px solid red' }}
              {...register('email', { required: { message: "Insira um e-mail", value: true } })}
            />
            <label>E-mail</label>
          </div>
          <LabelError msg={errors.email?.message as string} check={errors.email as any} />
          <div className="label-float mt-3">
            <input
              type="password"
              placeholder=" "
              style={errors.senha && { border: '1px solid red' }}
              {...register('senha', { required: { message: "Insira uma senha", value: true } })}
            />
            <label>Senha</label>
          </div>
          <LabelError msg={errors.senha?.message as string} check={errors.senha as any} />

          <span>Esqueceu a senha?</span> <span><Link to={"#"}>Recuperar</Link></span>
          <div>
            <ButtonPrimary type='submit' onClick={() => { }} disabled={isSubmitting}>Entrar</ButtonPrimary>
            <ButtonOutiline onClick={() => { }}>Cadastar</ButtonOutiline>
          </div>
        </>
      </form>
    </div>
  )
}
