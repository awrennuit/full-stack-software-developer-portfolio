import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-container">
      <h2 className="blog-heading">Horizontally Centering Things with CSS</h2>
      <div className="blog-content">
        <p>
          One of the most frustrating tasks for a new developer or someone less
          experienced with CSS is centering content. You got your frontend
          talking with the server, and the server hooked up to the database.
          Everything is going well. Then you want to center the table holding
          your dataset. You try a couple things, then search the internet only
          to find that your question is being misread by the search engine and
          only returning results on how to center text inside a table - not how
          to center the actual table. This seemed like such a meaningless and
          simple task, and now it's eaten up 15 minutes of your time. Maybe
          more. You start low-key panicking about how longer other seemingly
          simple styling tasks might take. It's absolutely soul-crushing. I've
          lived and learned, and now I'm here to help prevent others from this
          descent into madness. I've also included a cheat sheet at the end.
        </p>

        <h3>Horizontally Centering Text</h3>
        <p>
          Let's start with the basics. This works for pretty much any regular
          text and inline elements, like images and buttons. It is worth noting
          that in some cases the styling must be applied to the parent element
          in order to center things correctly.
        </p>

        <div className="blog-styling">text-align: center;</div>
        <br />

        <div className="blog-styling">
          <pre>{`<p style="text-align: center;">I'm centered!</p>`}</pre>
        </div>
        <br />

        <div className="blog-styling">
          <pre>
            {`<div style="text-align: center;">
  <img src="centered-pic.jpg" alt="my picture is centered!" />
</div>`}
          </pre>
        </div>

        <h3>Horizontally Centering Block-Level Elements</h3>
        <p>
          More basics. This works for many non-text items, like tables and divs.
          One way to write it would be:
        </p>
        <div className="blog-styling">
          margin-right: auto;
          <br />
          margin-left: auto;
        </div>
        <p>
          The value of auto means that the right and left margins of block-level
          elements are automatically calculated to be equal. This gives it a
          centering effect. Another way to write it could be:
        </p>
        <div className="blog-styling">
          margin-top: 0;
          <br />
          margin-right: auto;
          <br />
          margin-bottom: 0;
          <br />
          margin-left: auto;
        </div>
        <p>which can be simplified down to:</p>
        <div className="blog-styling">margin: 0 auto 0 auto;</div>
        <p>
          In this last example the four values correspond to the top, right,
          bottom, and left margins. An easier way to remember this is that it
          starts at the top and rotates around clockwise. Since the top & bottom
          values are the same, and the right & left values are the same we can
          simplify it down with the first value corresponding to both top &
          bottom, and the second value corresponding to both right & left:
        </p>
        <div className="blog-styling">margin: 0 auto;</div>
        <br />

        <div className="blog-styling">
          <pre>{`<table style="margin: 0 auto;"></table>`}</pre>
        </div>

        <h3>Horizontally Centering Inside Flexbox and Grid</h3>
        <p>
          Okay, this is where everything starts ramping up. Logic would dictate
          the text- align property should be able to handle this. Logic is
          wrong. Flexbox and Grid come with their own set of rules, and that can
          really trip people up. For these you want to use:
        </p>
        <div className="blog-styling">justify-content: center;</div>
        <br />

        <div className="blog-styling">
          <pre>
            {`<div style="display: flexbox; justify-content: center;">
  <p>I'm centered!</p>
</div>`}
          </pre>
        </div>

        <div className="blog-summary-border">
          <div className="blog-summary-container">
            <h2 className="blog-summary-heading">Summary</h2>
            <h3>Text & Inline Elements</h3>
            <div className="blog-styling">text-align: center;</div>
            <h3>Block-Level Elements</h3>
            <div className="blog-styling">margin: 0 auto;</div>
            <h3>Flexbox & Grid</h3>
            <div className="blog-styling">justify-content: center;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
