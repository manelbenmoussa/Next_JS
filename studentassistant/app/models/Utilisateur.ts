import mongoose, { Document, Schema } from "mongoose";

interface IUtilisateur extends Document {
  id: string;
  nom: string;
  email?: string; 
  mdp: string;
}

const UtilisateurSchema: Schema = new mongoose.Schema({
  titre: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String },
  mdp: { type: String},
});

export default mongoose.models.Note || mongoose.model<IUtilisateur>("Utilisateurs", UtilisateurSchema);