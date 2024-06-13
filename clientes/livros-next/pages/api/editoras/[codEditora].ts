import {NextApiRequest, NextApiResponse} from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const {codEditora} = req.query;
      const editora = await controleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({nome: editora});
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end("Método não permitido");
    }
  } catch (error) {
    res.status(500).json({error: "Erro no Servidor"});
  }
};