import whisper
import os
import requests

class ModuleOs:
    @staticmethod
    def get_audio():
       audioValue = os.listdir("audio/")[0]
       return f"audio/{audioValue}"
   
    @staticmethod
    def deleteAudio(path):
       os.remove(path)
       
class ApiRequest:
    @staticmethod
    def send_request(url, data):
        requests.post(url, data)
             
class Whisper(ModuleOs):
    @staticmethod
    def transcribe_audio():
        try:
            model = whisper.load_model("small")
            pathAudio = ModuleOs.get_audio()
            result = model.transcribe(pathAudio)
            
            if result["text"]:
              ModuleOs.deleteAudio(pathAudio)
              print(f"{result['text']}")
              return
            
        except Exception as e:
            print(f"Ocorreu um erro: {e}")
            
Whisper.transcribe_audio()

