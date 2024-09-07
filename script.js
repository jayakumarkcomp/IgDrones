const yearData = {
    2019: {
      pic: 'https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg',
      heading: '2019 April',
      paragraph: 'start my first Job in Non IT'
    },
    2020: {
      pic: 'https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-28.jpg',
      heading: '2020 April',
      paragraph: 'Improvment in my professional life, Upgrad my skills in Leadership'
    },
    2021: {
      pic: 'https://photographylife.com/wp-content/uploads/2018/11/Nikon-Z7-Image-Sample-26.jpg',
      heading: '2021 April',
      paragraph: 'Team handling and gain Experience in profession'
    },
    2022: {
      pic: 'https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2010/01/Fully-Recovered-Image-from-RAW.jpg/w=960',
      heading: '2022 April',
      paragraph: 'Enter into my second employment'
    },
    2023: {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcJnoBFceF6oekL1B6HYv89Qksya7gvBjt8b2bC506oRYXDA8e_Zr9_ZAt1CjbskqNis&usqp=CAU',
      heading: '2023 April',
      paragraph: 'Decided to switch my caree path from Non IT industry to Software '
    },
    2024: {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncKe0ICRxy4hNcAfTaJypnld-z6iU6c1CEjZ5kMZJsjkCrevFpPp0Jgd2Rvt5E2ni6Yo&usqp=CAU',
      heading: '2024 April',
      paragraph: 'Completed Full stack course in MERN fullstack'
    }
  };
  
  const profilePic = document.getElementById('profile-pic');
  const heading = document.getElementById('heading');
  const paragraph = document.getElementById('paragraph');
  
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      timelineItems.forEach((i) => i.classList.remove('active'));
      // Add active class to the current item
      item.classList.add('active');
      //console.log(item)
      
      const yearText= item.textContent;
      
  
      const year = yearText.match(/\d{4}/)[0]; // Extract the year using a regular expression
      console.log(year)
  
      const yearDataItem = yearData[year];
      if (yearDataItem) {
        profilePic.src = yearDataItem.pic;
        heading.textContent = yearDataItem.heading;
        paragraph.textContent = yearDataItem.paragraph;
      }
    });
  });