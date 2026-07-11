/* Presentation-only code samples.
 * Colour tokens (.t-key/.t-name/.t-str/.t-com/.t-num/.t-var) are themed in CSS.
 */
export const CODE = {
  parent: `<span class="t-str">PageController</span>     → <span class="t-name">page.twig</span>
<span class="t-str">PostController</span>     → <span class="t-name">single.twig</span>
<span class="t-str">PostsController</span>    → <span class="t-name">archive.twig</span>
<span class="t-str">SearchController</span>   → <span class="t-name">search.twig</span>
<span class="t-str">NotFoundController</span> → <span class="t-name">404.twig</span>

<span class="t-com">// extend any of them in your child theme</span>
<span class="t-key">class</span> <span class="t-name">PageController</span> <span class="t-key">extends</span> BasePageController {
  <span class="t-com">// override only what you need</span>
}`,

  controller: `<span class="t-key">class</span> <span class="t-name">EventsController</span> <span class="t-key">extends</span> <span class="t-name">AbstractController</span> {

  <span class="t-key">protected array</span> <span class="t-var">$context_getters</span> = [<span class="t-str">'events'</span>];

  <span class="t-key">protected function</span> <span class="t-name">get_events</span>(): <span class="t-key">iterable</span> {
    <span class="t-key">return</span> Quartermaster::<span class="t-name">posts</span>(<span class="t-str">'event'</span>)
      -&gt;<span class="t-name">whereMetaDate</span>(<span class="t-str">'start'</span>, <span class="t-str">'&gt;='</span>)
      -&gt;<span class="t-name">orderByMeta</span>(<span class="t-str">'start'</span>, <span class="t-str">'ASC'</span>)
      -&gt;<span class="t-name">get</span>();
  }
}`,

  config: `<span class="t-com">// Declared, not hooked. No functions.php spaghetti.</span>
<span class="t-key">return</span> [
  <span class="t-str">'event'</span> =&gt; [
    <span class="t-str">'labels'</span>      =&gt; [ <span class="t-str">'name'</span> =&gt; <span class="t-str">'Events'</span> ],
    <span class="t-str">'supports'</span>    =&gt; [<span class="t-str">'title'</span>, <span class="t-str">'editor'</span>, <span class="t-str">'thumbnail'</span>],
    <span class="t-str">'has_archive'</span> =&gt; <span class="t-num">true</span>,
    <span class="t-str">'rewrite'</span>     =&gt; [ <span class="t-str">'slug'</span> =&gt; <span class="t-str">'events'</span> ],
  ],
];`,

  routing: `<span class="t-str">front-page</span>          → <span class="t-name">FrontPageController</span>
<span class="t-str">archive-event</span>       → <span class="t-name">EventsController</span>
<span class="t-str">single-event</span>        → <span class="t-name">EventController</span>
<span class="t-str">taxonomy-event-type</span> → <span class="t-name">EventTypeController</span>
<span class="t-str">search</span>              → <span class="t-name">SearchController</span>

<span class="t-com">// {candidate}.twig renders when present</span>`,

  snippets: `<span class="t-com">// One class per concern — on or off in one line</span>
<span class="t-key">return</span> [
  <span class="t-str">'PressGang\\Snippets\\DisableEmojis'</span>   =&gt; [],
  <span class="t-str">'PressGang\\Snippets\\ImageSizes'</span>      =&gt; [
    <span class="t-str">'hero'</span> =&gt; [<span class="t-str">'width'</span> =&gt; 1920, <span class="t-str">'crop'</span> =&gt; <span class="t-num">true</span>],
  ],
  <span class="t-str">'MyAgency\\Snippets\\Analytics'</span>        =&gt; [
    <span class="t-str">'measurement_id'</span> =&gt; <span class="t-str">'G-XXXXXXX'</span>,
  ],
];`,

  classicTpl: `&lt;?php <span class="t-com">// archive-event.php</span>
get_header(); ?&gt;

&lt;?php if ( have_posts() ) : ?&gt;
  &lt;?php while ( have_posts() ) :
    the_post(); ?&gt;
    &lt;h2&gt;&lt;a href="&lt;?php the_permalink(); ?&gt;"&gt;
      &lt;?php the_title(); ?&gt;&lt;/a&gt;&lt;/h2&gt;
    &lt;?php the_excerpt(); ?&gt;
  &lt;?php endwhile; ?&gt;
&lt;?php endif;

get_footer();`,
  classicFn: `<span class="t-com">// functions.php</span>
add_action('init', function () {
  register_post_type('event', [
    'labels'      =&gt; [ 'name' =&gt; 'Events' ],
    'supports'    =&gt; ['title', 'editor'],
    'has_archive' =&gt; true,
  ]);
});`,

  timberTpl: `&lt;?php <span class="t-com">// archive-event.php</span>
$context = Timber::context();

$context[<span class="t-str">'events'</span>] = Timber::get_posts([
  <span class="t-str">'post_type'</span>      =&gt; <span class="t-str">'event'</span>,
  <span class="t-str">'posts_per_page'</span> =&gt; 12,
]);

Timber::render(
  <span class="t-str">'archive-event.twig'</span>,
  $context
);`,
  timberTwig: `<span class="t-com">{# archive-event.twig #}</span>
{% for event in events %}
  &lt;h2&gt;&lt;a href="{{ event.link }}"&gt;
    {{ event.title }}&lt;/a&gt;&lt;/h2&gt;
  {{ event.preview }}
{% endfor %}`,

  pgCtrl: `<span class="t-com">// EventsController.php</span>
<span class="t-com">// routed by convention — no stub file</span>
<span class="t-key">class</span> <span class="t-name">EventsController</span>
  <span class="t-key">extends</span> <span class="t-name">AbstractController</span> {

  <span class="t-key">protected array</span> $context_getters
    = [<span class="t-str">'events'</span>];

  <span class="t-key">protected function</span> <span class="t-name">get_events</span>() {
    <span class="t-key">return</span> Timber::<span class="t-name">get_posts</span>([
      <span class="t-str">'post_type'</span> =&gt; <span class="t-str">'event'</span>,
    ]);
  }
}`,
  pgConfig: `<span class="t-com">// config/custom-post-types.php</span>
<span class="t-str">'event'</span> =&gt; [
  <span class="t-str">'supports'</span>    =&gt; [<span class="t-str">'title'</span>, <span class="t-str">'editor'</span>],
  <span class="t-str">'has_archive'</span> =&gt; <span class="t-num">true</span>,
],`,

  qmBefore: `$events = new WP_Query([
  'post_type'      =&gt; 'event',
  'posts_per_page' =&gt; 12,
  'meta_key'       =&gt; 'start',
  'orderby'        =&gt; 'meta_value',
  'order'          =&gt; 'ASC',
  'meta_query'     =&gt; [[
    'key'     =&gt; 'start',
    'value'   =&gt; wp_date('Ymd'),
    'compare' =&gt; '&gt;=',
    'type'    =&gt; 'DATE',
  ]],
]);`,

  qmAfter: `$events = Quartermaster::<span class="t-name">posts</span>(<span class="t-str">'event'</span>)
  -&gt;<span class="t-name">paged</span>(12)
  -&gt;<span class="t-name">whereMetaDate</span>(<span class="t-str">'start'</span>, <span class="t-str">'&gt;='</span>)
  -&gt;<span class="t-name">orderByMeta</span>(<span class="t-str">'start'</span>, <span class="t-str">'ASC'</span>)
  -&gt;<span class="t-name">wpQuery</span>();

<span class="t-com">// Same plain WP_Query args — 5 readable steps</span>`,

  bosun: `<span class="t-num">$</span> wp package install pressgang-wp/bosun
<span class="t-num">$</span> wp bosun install

<span class="t-str">✔</span> Inventory: pressgang 2.1 · quartermaster 1.3
<span class="t-str">✔</span> Template routing detected — guidance aboard
<span class="t-str">✔</span> Composed CLAUDE.md + AGENTS.md
<span class="t-str">✔</span> Skills installed → .claude/skills/

<span class="t-key">All hands briefed.</span>`,

  getStarted: `<span class="t-num">$</span> composer global require pressgang-wp/capstan
<span class="t-num">$</span> wp capstan new`,
};

export const codeByIndex = { "00": CODE.parent, "01": CODE.controller, "02": CODE.config, "03": CODE.routing, "04": CODE.snippets };

export const codeLabelByIndex = {
  "00": "shipped with the parent theme",
  "01": "src/Controllers/EventsController.php",
  "02": "config/custom-post-types.php",
  "03": "resolved by convention",
  "04": "config/snippets.php",
};
