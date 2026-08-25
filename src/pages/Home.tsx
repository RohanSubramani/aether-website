import Nav from '../components/Nav'

const NAV_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Team', href: '#team' },
]

const TEAM_MEMBERS = [
  {
    name: 'Rauno Arike',
    role: 'Managing Director & Research Scientist',
    img: '/images/rauno-arike.jpeg',
    url: 'https://www.lesswrong.com/users/rauno-arike',
  },
  {
    name: 'Shubhorup Biswas',
    role: 'Research Scientist',
    img: '/images/shubhorup-biswas.jpg',
    url: 'https://www.lesswrong.com/users/shubhorup-biswas',
  },
  {
    name: 'Dennis Akar',
    role: 'Research Scientist',
    img: '/images/dennis.webp',
    url: 'https://www.lesswrong.com/users/dennis-akar',
  },
  {
    name: 'Vladimir Ivanov',
    role: 'Research Scientist',
    img: '/images/vlad.webp',
    url: 'https://www.lesswrong.com/users/vladimir-ivanov',
  },
  {
    name: 'Joey Yudelson',
    role: 'Research Scientist',
    img: '/images/joey.webp',
    url: 'https://www.lesswrong.com/users/joey-yudelson',
  },
]

const ADVISORS = [
  {
    name: 'Rohan Subramani',
    org: 'Founder of Aether; Coefficient Giving',
    img: '/images/rohan-subramani.jpeg',
    url: 'https://rohansubramani.github.io/home/',
  },
  {
    name: 'Seth Herd',
    org: 'Astera Institute',
    img: '/images/seth-herd.jpg',
    url: 'https://www.lesswrong.com/users/seth-herd',
  },
  {
    name: 'Zhijing Jin',
    org: 'University of Toronto',
    img: '/images/zhijing-jin.webp',
    url: 'https://www.zhijing-jin.com/',
  },
  {
    name: 'Francis Rhys Ward',
    org: 'Arrow Research',
    img: '/images/francis-rhys-ward.webp',
    url: 'https://francisrhysward.wordpress.com/',
  },
]

export default function Home() {
  return (
    <>
      <Nav links={NAV_LINKS} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Aether</h1>
            <p className="tagline">AI Safety Research</p>
            <p className="mission-text">
              Aether is an AI safety research group. Our primary focus is on studying LLM monitoring and hidden reasoning, but we are also interested in understanding and shaping the propensities of LLMs. More broadly, we aim to positively influence AGI companies, governments, and the AI safety field. We are funded by Coefficient Giving.
            </p>
          </div>
          <div className="hero-cta">
            <a
              href="https://discord.gg/5WjVBtgAhB"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </section>

      <section id="research" className="research">
        <div className="container">
          <h2 className="section-title section-title-only">Research</h2>

          <div className="research-list">
            <div className="research-item">
              <div className="research-content">
                <h3>Monitoring & Hidden Reasoning</h3>
                <p>
                Much of our work to date has been on chain-of-thought monitoring. We have investigated how information access affects LLM monitors' ability to detect sabotage, developed a taxonomy for understanding hidden reasoning processes within LLMs, and contributed to a no-CoT task-completion time horizon benchmark.
                Our current focus is on developing a <i>science of held-out monitors</i>. We are studying when our held-out measures of alignment silently degrade as we train LLMs against correlated proxies, and when they remain trustworthy.
                </p>

                <div className="pub-group">
                  <h4 className="pub-group-label">Papers</h4>
                  <ul className="pub-list">
                    <li>
                      <a href="https://arxiv.org/abs/2601.21112" target="_blank" rel="noopener noreferrer">
                        How does information access affect LLM monitors' ability to detect sabotage?
                      </a>{' '}
                      <span className="pub-venue">(ICML, 2026)</span>
                      <span className="pub-authors">
                        Rauno Arike*, Raja Mehta Moreno*, Rohan Subramani*, Shubhorup Biswas, Francis Rhys Ward
                      </span>
                    </li>
                    <li>
                      <a href="https://arxiv.org/abs/2606.07157" target="_blank" rel="noopener noreferrer">
                        Think Fast: Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models
                      </a>{' '}
                      <span className="pub-venue">(arXiv, 2026)</span>
                      <span className="pub-authors">
                        Dewi Gould*, Francis Rhys Ward*, Anders Cairns Woodruff&dagger;, Rauno Arike&dagger;, et al.
                      </span>
                      <span className="pub-note">
                        (in collaboration with Redwood Research, the Astra Fellowship, and MATS)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pub-group">
                  <h4 className="pub-group-label">Blog posts</h4>
                  <ul className="pub-list pub-list-columns">
                    <li>
                      <a href="https://www.lesswrong.com/posts/APkFfRp2AicL9RqvT/held-out-monitors-sometimes-degrade-even-when-not-trained" target="_blank" rel="noopener noreferrer">
                        Held-out Monitors Sometimes Degrade, Even When Not Trained Against
                      </a>
                      <span className="pub-authors">Joey Yudelson</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/ZrgFfeWuckpwK5Lyi/hidden-reasoning-in-llms-a-taxonomy" target="_blank" rel="noopener noreferrer">
                        Hidden Reasoning in LLMs: A Taxonomy
                      </a>
                      <span className="pub-authors">Rauno Arike, Rohan Subramani, Shubhorup Biswas</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/zkccztuSjLshffrNr/13-arguments-about-a-transition-to-neuralese-ais" target="_blank" rel="noopener noreferrer">
                        13 Arguments About a Transition to Neuralese AIs
                      </a>
                      <span className="pub-authors">Rauno Arike</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/g8by3avjatXnpvM4A/should-we-train-against-cot-monitors-1" target="_blank" rel="noopener noreferrer">
                        Should We Train Against (CoT) Monitors?
                      </a>
                      <span className="pub-authors">Rohan Subramani</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/tEFD2bgNWZ6XcurKA/the-most-forbidden-technique-is-not-always-forbidden-1" target="_blank" rel="noopener noreferrer">
                        The Most Forbidden Technique is not always forbidden
                      </a>
                      <span className="pub-authors">Rauno Arike</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/9z6TuKEgZNsmqdfy6/exploring-reinforcement-learning-effects-on-chain-of-thought" target="_blank" rel="noopener noreferrer">
                        Exploring Reinforcement Learning Effects on Chain-of-Thought Legibility
                      </a>
                      <span className="pub-authors">Julian Huang, Rohan Subramani, Baram Sosis, Vedant Badoni, Holden Mui</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/QdQnM4v8KbLZZdjH5/efficiently-detecting-hidden-reasoning-with-a-small" target="_blank" rel="noopener noreferrer">
                        Efficiently Detecting Hidden Reasoning with a Small Predictor Model
                      </a>
                      <span className="pub-authors">
                        Rohan Subramani, Vishnu Vardhan Sai Lanka, Yau-Meng Wong, Daria Ivanova
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="research-item">
              <div className="research-content">
                <h3>Understanding and Shaping LLM Propensities</h3>
                <p>
                  We have also explored topics related to LLM propensities, including character training, generalization science, and model organisms of misalignment.
                </p>

                <div className="pub-group">
                  <h4 className="pub-group-label">Blog posts</h4>
                  <ul className="pub-list pub-list-columns">
                    <li>
                      <a href="https://www.lesswrong.com/posts/6EwuCH3vZ7qvPt82k/a-list-of-research-directions-in-character-training" target="_blank" rel="noopener noreferrer">
                        A List of Research Directions in Character Training
                      </a>
                      <span className="pub-authors">Rauno Arike</span>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/pEZ6ChmGLf3FF5z9y/model-organisms-of-sandbagging-in-the-wild" target="_blank" rel="noopener noreferrer">
                        Model Organisms of Sandbagging in the Wild?
                      </a>
                      <span className="pub-authors">Vladimir Ivanov</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="research-item">
              <div className="research-content">
                <h3>Continual Learning Safety</h3>
                <p>
                  We studied how continual learning may arise in LLM agents and what it
                  would mean for AI capabilities and safety. We're no longer actively pursuing this direction.
                </p>

                <div className="pub-group">
                  <h4 className="pub-group-label">Papers</h4>
                  <ul className="pub-list">
                    <li>
                      <a href="https://static1.squarespace.com/static/68c0e2a71bf8b3372a371105/t/69fc5a58aa38606b69ae9b02/1778145880719/Continual_Learning_camera_ready.pdf" target="_blank" rel="noopener noreferrer">
                        Continual Learning in LLM Agents: Capabilities, Risks, and Research Directions
                      </a>{' '}
                      <span className="pub-venue">(TAIS, 2026)</span>
                      <span className="pub-authors">
                        Rohan Subramani*, Rauno Arike*, Owen Terry, Achu Menon, Zhijing Jin, Francis Rhys Ward, Seth Herd
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pub-group">
                  <h4 className="pub-group-label">Blog posts</h4>
                  <ul className="pub-list">
                    <li>
                      <a href="https://www.lesswrong.com/s/oc5Auteiibo56kNXw" target="_blank" rel="noopener noreferrer">
                        Implications of Continual Learning for LLM Agents
                      </a>{' '}
                      <span className="pub-venue">(LessWrong sequence)</span>
                      <span className="pub-authors">
                        Rohan Subramani*, Rauno Arike*, Owen Terry, Achu Menon, Zhijing Jin, Francis Rhys Ward, Seth Herd
                      </span>
                      <ul className="pub-sublist">
                        <li>
                          <a href="https://www.lesswrong.com/posts/qChDifwpY8znER7cW/implications-of-continual-learning-for-llm-agents" target="_blank" rel="noopener noreferrer">
                            Introduction
                          </a>
                        </li>
                        <li>
                          <a href="https://www.lesswrong.com/posts/5mCJzimtNZc9o4e26/what-s-continual-learning-and-why-might-we-expect-to-see-it" target="_blank" rel="noopener noreferrer">
                            What's Continual Learning, and Why Might We Expect To See It In Advanced LLM Agents?
                          </a>
                        </li>
                        <li>
                          <a href="https://www.lesswrong.com/posts/j2zBqt7AksoEoHXNp/how-might-continual-learning-affect-safety-and-alignment" target="_blank" rel="noopener noreferrer">
                            How Might Continual Learning Affect Safety and Alignment?
                          </a>
                        </li>
                        <li>
                          <a href="https://www.lesswrong.com/posts/FKggLpnfbpbYvnjfG/angles-of-attack-for-continual-learning-safety" target="_blank" rel="noopener noreferrer">
                            Angles of Attack for Continual Learning Safety
                          </a>
                        </li>
                        <li>
                          <a href="https://www.lesswrong.com/posts/qZrbhoaEALFTmyidr/perspectives-on-continual-learning-survey-results-and" target="_blank" rel="noopener noreferrer">
                            Perspectives on Continual Learning: Survey Results and Forecasts
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="research-figure">
                <img src="/images/CL_robot.png" alt="CL Robot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="hiring">
        <div className="container">
          <h2 className="section-title section-title-only">Get Involved</h2>

          <div className="get-involved-content" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 17, color: 'var(--text-light)', lineHeight: 1.7 }}>
              We are not hiring for full-time roles right now, but you can view details
              about our last hiring round <a href="/past-hiring">here</a>.
            </p>
            <div className="hero-cta" style={{ marginTop: 24 }}>
              <a
                href="https://discord.gg/5WjVBtgAhB"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2 className="section-title section-title-only">Our Team</h2>

          <div className="team-grid">
            {TEAM_MEMBERS.map(({ name, role, img, url }) => (
              <div key={name} className="team-member">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div className="team-member-avatar">
                    {img && <img src={img} alt={name} />}
                  </div>
                </a>
                <h3>
                  <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                </h3>
                <p>{role}</p>
              </div>
            ))}
          </div>

          <div className="advisors">
            <h2 className="section-title" style={{ fontSize: 36 }}>Advisors</h2>
            <div className="advisors-grid">
              {ADVISORS.map(({ name, org, img, url }) => (
                <div key={name} className="advisor">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="advisor-avatar">
                      <img src={img} alt={name} />
                    </div>
                  </a>
                  <h4>
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                  </h4>
                  <p>{org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
