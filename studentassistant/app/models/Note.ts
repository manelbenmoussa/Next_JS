import mongoose, { Document, Schema } from "mongoose";

interface INote extends Document {
  titre: string;
  contenu: string;
  categorie?: string; 
  dateCreation: Date;
}

const NoteSchema: Schema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  categorie: { type: String },
  dateCreation: { type: Date, default: Date.now },
});

export default mongoose.models.Note || mongoose.model<INote>("Notes", NoteSchema);
