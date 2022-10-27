      document.querySelector(".search").addEventListener("click", searchBook);

      function searchBook() {
        const isbn = document.querySelector(".inputISBN").value.trim().split('-').join('');
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
          .then(book => book.json())
          .then(data => {
            const details = data.items[0].volumeInfo;
            document.querySelector(".thumbnail").setAttribute("src", details.imageLinks.smallThumbnail);
            document.querySelector(".author").innerHTML = details.authors.join();
            document.querySelector(".title").innerHTML = details.title;
            document.querySelector(".description").innerHTML = data.items[0].searchInfo.textSnippet;
          })
          .catch(() => alert("Wpisałeś zły numer ISBN lub książka nie istnieje w bazie"));
      }
