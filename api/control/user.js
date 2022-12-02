import{db} from "../db.js";

export const getUsers = (_, res)=>{
    const q = "SELECT * FROM usuarios";

    db.query(q, (err,data)=> {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO usuarios(`nombre`, `email`, `telefono`, `fecha_nacimiento`) VALUES(?)";
  
    const values = [
      req.body.nombre,
      req.body.email,
      req.body.telefono,
      req.body.fecha_nacimiento,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário Creado Exitosamente!.");
    });
  };
  
  export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `nombre` = ?, `email` = ?, `telefono` = ?, `fecha_nacimiento` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nombre,
      req.body.email,
      req.body.telefono,
      req.body.fecha_nacimiento,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário Actualizado Exitosamente.");
    });
  };
  
  export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário Eliminado exitosamente.");
    });
  };
  