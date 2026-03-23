import React from 'react'
import { getPost } from './blogPosts.js'

// Simple markdown-ish renderer — handles ## headers, **bold**, *italic*, plain paragraphs
function renderContent(text) {
  return text.trim().split('\n\n').map((block, i) => {
    const trimmed = block.trim()
    if (!trimmed) return null

    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(18px,3vw,24px)', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', margin:'40px 0 16px', lineHeight:'1.2'}}>
          {trimmed.replace('## ', '')}
        </h2>
      )
    }

    // Inline formatting
    const formatted = trimmed.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) return <strong key={j} style={{color:'#d8e0e8'}}>{part.slice(2,-2)}</strong>
      if (part.startsWith('*') && part.endsWith('*')) return <em key={j} style={{color:'#d8e0e8'}}>{part.slice(1,-1)}</em>
      return part
    })

    return (
      <p key={i} style={{color:'#8a9aaa', fontSize:'clamp(15px,2vw,17px)', lineHeight:'1.85', margin:'0 0 24px'}}>
        {formatted}
      </p>
    )
  }).filter(Boolean)
}

export default function BlogPostPage({ slug, onNavigate, onLaunchApp }) {
  const post = getPost(slug)
  const nav = (to) => { onNavigate && onNavigate(to); window.scrollTo(0,0) }

  // Set page title and meta for this specific post
  React.useEffect(() => {
    if (post) {
      document.title = post.title + ' | West Coast Wire Pro'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt || post.title)
    }
    return () => {
      document.title = 'West Coast Wire Pro — California Electrician Exam Prep'
    }
  }, [post])

  if (!post) return (
    <div style={{minHeight:'100vh', background:'#0a1016', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'16px'}}>
      <div style={{color:'#d8e0e8', fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'24px'}}>Post not found</div>
      <button onClick={() => nav('blog')} style={{color:'#c8a84b', background:'none', border:'none', cursor:'pointer', fontSize:'14px'}}>← Back to Blog</button>
    </div>
  )

  return (
    <div style={{minHeight:'100vh', background:'#0a1016', paddingTop:'clamp(80px,14vw,140px)'}}>
      <div style={{maxWidth:'720px', margin:'0 auto', padding:'0 clamp(20px,5vw,40px) 80px'}}>

        {/* Back */}
        <button onClick={() => nav('blog')} style={{background:'none', border:'none', color:'#c8a84b', fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'1px', cursor:'pointer', marginBottom:'32px', padding:'0', display:'flex', alignItems:'center', gap:'6px'}}>
          ← Blog
        </button>

        {/* Meta */}
        <div style={{display:'flex', gap:'12px', alignItems:'center', marginBottom:'20px', flexWrap:'wrap'}}>
          <span style={{background:'rgba(200,168,75,0.1)', border:'1px solid rgba(200,168,75,0.3)', color:'#c8a84b', fontSize:'11px', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', padding:'3px 10px', borderRadius:'3px', fontFamily:"'Courier New',monospace"}}>
            {post.category}
          </span>
          <span style={{color:'#4a5a6a', fontSize:'12px'}}>{post.date}</span>
          <span style={{color:'#4a5a6a', fontSize:'12px'}}>· {post.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(22px,4vw,36px)', fontWeight:'900', color:'#d8e0e8', margin:'0 0 32px', lineHeight:'1.2'}}>
          {post.title}
        </h1>

        {/* Divider */}
        <div style={{height:'2px', background:'linear-gradient(90deg,#c8a84b,transparent)', marginBottom:'40px'}} />

        {/* Content */}
        <div>
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div style={{marginTop:'48px', background:'rgba(200,168,75,0.05)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'32px', textAlign:'center'}}>
          <div style={{color:'#d8e0e8', fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'18px', fontWeight:'900', textTransform:'uppercase', marginBottom:'12px'}}>
            Your License. Your Future.
          </div>
          <p style={{color:'#7a8a9a', fontSize:'14px', marginBottom:'20px', lineHeight:'1.6'}}>
            462 NEC-referenced practice questions for the California Journeyman exam.<br/>
            Modules 1 & 2 free — no account needed.
          </p>
          <button onClick={() => { onLaunchApp && onLaunchApp() }} style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', border:'none', borderRadius:'6px', padding:'13px 28px', cursor:'pointer'}}>
            ⚡ Start Studying Free
          </button>
        </div>

        {/* Back to blog */}
        <div style={{marginTop:'32px', textAlign:'center'}}>
          <button onClick={() => nav('blog')} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'13px', cursor:'pointer'}}>
            ← Back to all posts
          </button>
        </div>

      </div>
    </div>
  )
}
