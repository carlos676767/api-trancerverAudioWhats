import whisper

class Whisper:
    @staticmethod
    def transcribe_audio():
        try:
            model = whisper.load_model("small")
            result = model.transcribe("audio/129246ca-c403-4030-8d15-8fc2ba7f4a5a.wav")
            
            if result["text"]:
                4
        except Exception as e:
            print(f"Ocorreu um erro: {e}")


Whisper.transcribe_audio()

