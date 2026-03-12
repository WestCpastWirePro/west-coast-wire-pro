import { blogPosts } from './blogPosts.js'

export default function BlogPage({ onNavigate }) {
  const nav = (to) => { onNavigate && onNavigate(to); window.scrollTo(0,0) }

  return (
    <div style={{minHeight:'100vh', background:'#0a1016', paddingTop:'clamp(80px,14vw,140px)'}}>
      <div style={{maxWidth:'800px', margin:'0 auto', padding:'0 clamp(20px,5vw,40px) 80px'}}>

        {/* Header */}
        <div style={{marginBottom:'48px'}}>
          <div style={{color:'#c8a84b', fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'Courier New',monospace", marginBottom:'16px'}}>
            ⚡ West Coast Wire Pro
          </div>
          <h1 style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(28px,5vw,44px)', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', margin:'0 0 16px', lineHeight:'1.1'}}>
            Blog
          </h1>
          <p style={{color:'#7a8a9a', fontSize:'16px', lineHeight:'1.6', margin:0}}>
            Industry news, exam strategy, and career insights for California electricians.
          </p>
        </div>

        {/* Posts */}
        <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
          {blogPosts.map(post => (
            <article key={post.slug}
              onClick={() => nav('blog-post:' + post.slug)}
              style={{background:'#111820', border:'1px solid rgba(200,168,75,0.15)', borderRadius:'8px', padding:'28px 32px', cursor:'pointer', transition:'border-color 0.2s'}}
              onMouseEnter={e => e.currentTarget.style.borderColor='rgba(200,168,75,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(200,168,75,0.15)'}
            >
              <div style={{display:'flex', gap:'12px', alignItems:'center', marginBottom:'14px', flexWrap:'wrap'}}>
                <span style={{background:'rgba(200,168,75,0.1)', border:'1px solid rgba(200,168,75,0.3)', color:'#c8a84b', fontSize:'11px', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', padding:'3px 10px', borderRadius:'3px', fontFamily:"'Courier New',monospace"}}>
                  {post.category}
                </span>
                <span style={{color:'#4a5a6a', fontSize:'12px'}}>{post.date}</span>
                <span style={{color:'#4a5a6a', fontSize:'12px'}}>· {post.readTime}</span>
              </div>
              <h2 style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(16px,2.5vw,20px)', fontWeight:'900', color:'#d8e0e8', margin:'0 0 12px', lineHeight:'1.3'}}>
                {post.title}
              </h2>
              <p style={{color:'#7a8a9a', fontSize:'14px', lineHeight:'1.7', margin:'0 0 16px'}}>
                {post.excerpt}
              </p>
              <span style={{color:'#c8a84b', fontSize:'13px', fontWeight:'700', fontFamily:"'Arial Black',Arial,sans-serif", textTransform:'uppercase', letterSpacing:'0.5px'}}>
                Read More →
              </span>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{marginTop:'60px', background:'rgba(200,168,75,0.05)', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'8px', padding:'32px', textAlign:'center'}}>
          <div style={{color:'#d8e0e8', fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'18px', fontWeight:'900', textTransform:'uppercase', marginBottom:'12px'}}>
            Ready to Start Studying?
          </div>
          <p style={{color:'#7a8a9a', fontSize:'14px', marginBottom:'20px'}}>
            Modules 1 & 2 free — no account needed.
          </p>
          <button onClick={() => nav('app')} style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', border:'none', borderRadius:'6px', padding:'13px 28px', cursor:'pointer'}}>
            ⚡ Start Studying Free
          </button>
        </div>

      </div>
    </div>
  )
}
