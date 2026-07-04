import urllib.request
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_script = False
        self.texts = []

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.in_script = True

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.in_script = False

    def handle_data(self, data):
        if not self.in_script:
            cleaned = data.strip()
            if cleaned:
                self.texts.append(cleaned)

url = "https://poch.studio/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    parser = MyHTMLParser()
    parser.feed(html)
    for t in parser.texts:
        print(t)
except Exception as e:
    print(e)
