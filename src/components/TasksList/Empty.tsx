import styles from './Empty.module.css'
import clipboard from '../../assets/Clipboard.svg'

export function Empty() {
    return(
        <div className={styles.container}>
          <img src={clipboard} alt="ícone de prancheta" />

          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus afazeres do dia
          </p>
        </div>
    )
}