const express = require('express')
const cors = require('cors')
const app = express()

//conecao de banco 
const mssql = require('mssql/msnodesqlv8')

const conexao = new mssql.ConnectionPool({
    server:'localhost',
    password:'Sql2@19',
    driver:'msnodesqlv8',
    datebase:'DEVCORP1',
    user:'sa'
})


app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello world!');
})

//mostrar os correntistas 
app.get('/inicio', (req,res) => {
    console.log('ok')
    conexao.connect().then((pool) => {
        const sql = 'SELECT * FROM correntistas'
        pool.query(sql).then((rows) => {
            console.log('ok2')
            console.log(rows)
            res.send(rows.recordset)
        })
    })
})

//exacutar deposito
app.post('/Deposito', (req,res) => {
    const codigo = '\''+ req.body.CodigoCorrentista +'\'';
    const valor = '\''+ req.body.Valor +'\'';

    conexao.connect().then((pool) => {
        const sql = `Exec spDeposito ${codigo},${valor}`
        pool.query(sql).then((rows) => {
            res.status(200).send(rows.recordset)
        })
    })
})
//executar movimentacao
app.get('/movimentacao', (req,res) => {
    conexao.connect().then((pool) => {
        const sql = 'SELECT * FROM movimentacoes'
        pool.query(sql).then((rows) => {
            res.send(rows.recordset)
        })
    })
})

//executar saque
app.post('/saque', (req,res) => {
    const codigo = '\''+ req.body.CodigoCorrentista +'\'';
    const valor = '\''+ req.body.Valor +'\'';

    conexao.connect().then((pool) => {
        const sql = `Exec spSaque ${codigo},${valor}`
        pool.query(sql).then((rows) => {
            res.status(200).send(rows.recordset)
        })
    })
})
//executar pagamento
app.post('/pagamneto', (req,res) => {
    const codigo = '\''+ req.body.CodigoCorrentista +'\'';
    const valor = '\''+ req.body.Valor +'\'';

    conexao.connect().then((pool) => {
        const sql = `Exec spPagamento ${codigo},${valor}`
        pool.query(sql).then((rows) => {
            res.status(200).send(rows.recordset)
        })
    })
})
//executar transferencia
app.post('/transferencia', (req,res) => {
    const codigo = '\''+ req.body.CodigoCorrentista +'\'';
    const valor = '\''+ req.body.Valor +'\'';
    const destino = '\''+ req.body.CodigoCorrentistaDestino +'\'';


    conexao.connect().then((pool) => {
        const sql = `Exec spTransferencia ${codigo},${destino},${valor}`
        pool.query(sql).then((rows) => {
            res.status(200).send(rows.recordset)
        })
    })
})
//executar extrato
app.post('/transferencia', (req,res) => {
    const codigo = '\''+ req.body.CodigoCorrentista +'\'';
    const inicio = '\''+ req.body.DataInicial +'\'';
    const final = '\''+ req.body.DataFinal +'\'';


    conexao.connect().then((pool) => {
        const sql = `Exec spExtratoCorrentista ${codigo},${inicio},${final}`
        pool.query(sql).then((rows) => {
            res.status(200).send(rows.recordset)
        })
    })
})

app.listen(5000, () => console.log('http://localhost:5000/'))