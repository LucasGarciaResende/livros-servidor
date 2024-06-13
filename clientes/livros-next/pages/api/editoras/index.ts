import {NextApiRequest, NextApiResponse} from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = await controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end("Método não permitido");
    }
  } catch (error) {
    res.status(500).json({error: "Erro no Servidor"});
  }
};