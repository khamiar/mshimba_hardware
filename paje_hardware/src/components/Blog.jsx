const posts = [
  {
    id: 1,
    title: 'Healthy Fast Food: A Myth or Beautiful Reality',
    tag: 'Food & Health',
    author: 'James Writer',
    comments: 24,
    day: '14',
    month: 'Mar',
    img: 'src/assets/img/blog/1.jpg',
  },
  {
    id: 2,
    title: "Is Fast Food Getting Healthier? Here's What We Found",
    tag: 'Food Science',
    author: 'Sarah Grain',
    comments: 18,
    day: '28',
    month: 'Feb',
    img: 'src/assets/img/blog/2.jpg',
  },
  {
    id: 3,
    title: "Innovative Hot Chickpeas Flake Crackin' Recipe at Home",
    tag: 'Recipes',
    author: 'Chef Marcus',
    comments: 32,
    day: '05',
    month: 'Jan',
    img: 'src/assets/img/blog/3.jpg',
  },
];

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">News & Updates</span>
          <h2 className="stitle">
            Our Latest <span>Blog</span> Posts
          </h2>
          <div className="sline"></div>
        </div>

        <div className="row g-4">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="blcard">
                <div className="blimg">
                  <img src={post.img} alt={post.title} />
                  <div className="bldatebdg">
                    <span className="bd">{post.day}</span>
                    <span className="bm">{post.month}</span>
                  </div>
                </div>
                <div className="blbody">
                  <div className="bltag">{post.tag}</div>
                  <div className="bltit">
                    <a href="#">{post.title}</a>
                  </div>
                  <div className="blmeta">
                    <span>
                      <i className="fas fa-user"></i> {post.author}
                    </span>
                    <span>
                      <i className="fas fa-comment"></i> {post.comments} Comments
                    </span>
                  </div>
                  <a href="#" className="blmore">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}