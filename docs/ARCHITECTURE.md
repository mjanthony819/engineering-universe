# Architecture and design decisions

## Inspection and scope

The connected account had no Engineering Universe repository. A new private repository and Next.js application were created rather than replacing another project. The first coherent journey is computer -> binary -> logic -> variables -> control flow -> algorithms -> byte-inspector project.

## Information architecture

`/` introduces the product and embeds a real binary lab. `/explore/` is the topic directory and prerequisite map; its list uses the same metadata. `/path/` contains ordered modules, completion and project criteria. `/learn/[slug]/` statically renders all 54 lessons. `/labs/` gathers the three experiments. `/about/` explains status, privacy, planned branches and contribution.

## Data flow

Canonical typed lesson objects -> reusable LessonView and build-time PDFKit generator. Topic registry -> validation and React Flow/list explorer. Pure algorithms -> interactive labs and unit tests. Browser progress store -> path, lesson and map state.

Static export avoids a server, credentials and fake authentication. A CDN can serve the files, but no user capacity has been measured. The graph is lazy-loaded; its mobile list avoids pointer precision. Internal Next links support basePath. PDF assets use the same basePath helper.

## UI system

Dark navy, electric blue, restrained green/purple/amber path accents. System sans-serif with monospace metadata avoids external font requests. The orbital geometric mark represents connected knowledge. Editable shadcn-style Button uses Radix Slot, class-variance-authority and class merging; other panels are semantic HTML. React Flow is used for the actual graph, not a decorative substitute.

Official sources reviewed: https://ui.shadcn.com/docs/installation/next , https://ui.shadcn.com/docs/components/button , https://reactflow.dev/learn , https://ui.aceternity.com/ , https://reactbits.dev/ , https://mobbin.com/ . Aceternity and React Bits were evaluated but not installed: their visual effects add motion dependencies without improving these deterministic lessons. Mobbin's public overview was accessible, not paid screen flows. No claim that a specific product flow was inspected.

## Progress contract

`eu-progress-v1` stores passed lesson IDs, bookmarks, started IDs and project self-check. Pass requires all quiz answers correct plus a practice confirmation. No page view implies completion. Persistence failures return explicit messages. This is a device-local convenience, not proof of competence, authentication or tamper resistance.

## Future persistence

If accounts are required, introduce Supabase Auth and Postgres progress tables with row-level security and server-side validation. Migrate through a repository interface, rather than trusting the existing local store. Service keys must remain server-only. Keep curriculum content static while progress becomes dynamic. No database is needed for the current feature set.

## Risks and next steps

Independent content review; deeper lesson interactions; diagrams for every relevant guide; better graph layout for dense branches; robust stored-data sanitization; cross-browser manual testing; genuine project evaluation. Browser storage can be cleared. Planned curriculum is illustrative route metadata, not universal prerequisite law. No performance benchmark, account system or public deployment is implied.
