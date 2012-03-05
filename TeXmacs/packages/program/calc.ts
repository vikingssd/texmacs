<TeXmacs|1.0.7.14>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|calc|1.0>

    <\src-purpose>
      Macros for spreadsheets
    </src-purpose>

    <src-copyright|1998--2004|Joris van der Hoeven>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <\active*>
    <\src-comment>
      Macros for spreadsheet elements
    </src-comment>
  </active*>

  <assign|calc-inert|<macro|ref|in|<locus|<id|<arg|ref>>|<arg|in>>>>

  <assign|calc-input|<macro|ref|in|out|<locus|<id|<arg|ref>>|<arg|in>>>>

  <assign|calc-output|<macro|ref|in|out|<locus|<id|<arg|ref>>|<arg|out>>>>

  <assign|calc-ref|<macro|ref|<with|color|dark magenta|<arg|ref>>>>

  \;

  <assign|calc-table|<macro|ref|body|<locus|<id|<arg|ref>>|<arg|body>>>>

  <assign|cell-inert|<macro|ref|body|<calc-inert|<arg|ref>|<arg|body>>>>

  <assign|cell-input|<macro|ref|in|out|<calc-input|<arg|ref>|<arg|in>|<arg|out>>>>

  <assign|cell-output|<macro|ref|in|out|<calc-output|<arg|ref>|<arg|in>|<arg|out>>>>

  <assign|cell-ref|<macro|ref|<calc-ref|<arg|ref>>>>

  <assign|cell-range|<macro|start|end|<arg|start>:<arg|end>>>

  <drd-props|cell-inert|arity|2|border|no|accessible|1>

  <drd-props|cell-input|arity|3|border|no|accessible|1>

  <drd-props|cell-output|arity|3|border|no|accessible|2>

  \;
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>