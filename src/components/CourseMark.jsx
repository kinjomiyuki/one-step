import { getCourseColor } from '../data/courseMeta';

// コースの頭文字の四角。系統ごとの色で、コースの関連が、見分けられる
export default function CourseMark({ course, className = 'w-12 h-12 text-sm' }) {
  return (
    <span className={`neu-square flex-shrink-0 ${className}`} style={getCourseColor(course.id)}>
      {course.shortLabel}
    </span>
  );
}
